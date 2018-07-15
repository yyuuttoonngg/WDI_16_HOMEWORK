require_relative 'animal'
require_relative 'client'
# require_relative 'adopt'

$shelter = {
    :animals => [],
    :clients => [],
}

client1 = Client.new "Bob", 3, 40
client2 = Client.new "Chris", 0, 25
# client3 = Client.new "Kate", 1, 30


animal1 = Animal.new "mimi",1,"male","cat"
animal2 = Animal.new "jo",2,"male","bird"
animal3 = Animal.new "happy",3,"female","dog"
animal4 = Animal.new "pip",1,"male","cat"
animal5 = Animal.new "bo",4,"female","pig"

client1.get_pets animal4
client1.get_pets animal5

$shelter[:clients].push client1
$shelter[:clients].push client2
$shelter[:animals].push animal1
$shelter[:animals].push animal2
$shelter[:animals].push animal3




def menu 
    puts "please choose from option 1-6
    1-display all animals;
    2-display all clients;
    3-create an animal;
    4-create an client;
    5-for client to adopt an animal;
    6-for client to put an animal up for adoption"
    answer = gets.chomp
 
    case answer
        when "1" then p $shelter[:animals]
        when "2" then p $shelter[:clients]
        when "3" then $shelter[:animals].push (Animal.new)
        when "4" then $shelter[:clients].push (Client.new)
        when "5" then 
            puts "please enter the name of the client"
            input_client = gets.chomp
            adopt_client = $shelter[:clients].select{|item|item.instance_variable_get(:@name_client)== input_client}[0]
            puts "which animal dose the client want to adopt"
            input_animal = gets.chomp
            adopt_animal = $shelter[:animals].select{|item|item.instance_variable_get(:@name_animal) == input_animal}[0]
            adopt_client.instance_variable_set(:@pets,adopt_animal)
            $shelter[:animals].delete adopt_animal
        when "6" then 
            puts "please enter the name of the client"
            input_client = gets.chomp
            donate_client = $shelter[:clients].select{|item|item.instance_variable_get(:@name_client)== input_client}[0]
            puts "client has the following pets"
            donate_client.instance_variable_get(:@pets).each{|pet|puts pet.instance_variable_get(:@name_animal)}
            puts "enter the name of animal to donate"
            input_animal = gets.chomp
            donate_animal = donate_client.instance_variable_get(:@pets).select{|item|item.instance_variable_get(:@name_animal) == input_animal}[0]
            donate_client.instance_variable_get(:@pets).delete donate_animal
            $shelter[:animals].push donate_animal
        else puts "please choose a number between 1-6"
    end
end

menu
p client1
p $shelter[:animals]

