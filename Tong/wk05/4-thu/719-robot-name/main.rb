require 'securerandom'
require 'pry'

$used_names =[]

class Robot
    def initialize
       start_count
       @mac_id =SecureRandom.uuid
       @time_create = Time.now
       @name = generate_name
       while $used_names.include?(@name)
           @name = generate_name
       end
       $used_names.push @name
    end

    def generate_name
       prefix = ('AA'..'ZZ').to_a.sample
       suffix = ('000'..'999').to_a.sample
       "#{prefix}#{suffix}"
    end

    def name
        def_count
        @name
    end

    def reset
        @time_reset = Time.now
        def_count
        puts "Resetting to factory settings."
        @name = generate_name
        while $used_names.include?(@name)
            @name = generate_name
        end
        $used_names.push @name
        @name
    end

    def instruction_count
        def_count
    end
    def timers
        @timers = def_timers
    end

    private
    def def_timers
        def_count
        time = Time.now
        time1 = time - @time_reset
        time2 = time - @time_create
        "#{time1} seconds since last boot, #{time2} seconds since creation"
    end

    def start_count
        @count = 0
    end 

    def def_count
        @count += 1
    end
end


r1 = Robot.new
puts r1.name
puts r1.name
p '11111'


r2 = Robot.new
puts r2.name
puts r2.name
puts r2.name

p $used_names

puts r2.instruction_count
r1.reset
puts r1.name
puts r1.name
puts r1.timers