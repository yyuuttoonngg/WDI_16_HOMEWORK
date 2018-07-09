
def loc()
    line_num = 0
    puts "enter filename"
    filename = gets.chomp
    text = File.open(filename).each do |line|
        line_num  += 1
    end
    puts "#{line_num} line(s)"
end
loc()