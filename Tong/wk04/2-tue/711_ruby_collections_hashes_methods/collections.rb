#"Arrays"
planeteers = ["Earth", "Wind", "Captain Planet", "Fire", "Water"]
#Access the second value in planeteers.
planeteers[1]
#Add "Heart" to the end of planeteers.
planeteers.push "Heart"
# Combine planeteers with rangers = ["Red", "Blue", "Pink", "Yellow", "Black"] and save the result in a variable called heroes.
rangers = ["Red", "Blue", "Pink", "Yellow", "Black"]
heroes = planeteers.clone.concat rangers
heroes
#Alphabetize the contents of heroes using a method
heroes.sort!
#Randomize the contents of heroes using a method
heroes.shuffle!
#bonus - Select a random element from heroes using a method.
ran_element = heroes.shuffle.first
#Select all elements in heroes that begin with "B" using a method
heroes.select{|a|a =~ /^B/}

#"Hashes"
ninja_turtle = {
    name: "Michelangelo",
    weapon: "Nunchuks",
    radical: true 
}
#Add a key age
ninja_turtle[:age] = 108
#Remove the radical key-value pair
ninja_turtle.delete(:radical)

#Add a key pizza_toppings to ninja_turtle. Set it to an array of strings (e.g., ["cheese", "pepperoni", "peppers"])
ninja_turtle[:pizza_toppings] = ["cheese", "pepperoni", "peppers"]
#Access the first element of pizza_toppings
ninja_turtle[:pizza_toppings][0]
#produce an array containing all of ninja_turtle's keys using a method
key_arr = ninja_turtle.keys
#bonus - Print out each key-value pair in the following format - "KEY's is equal to VALUE" -- using a method
ninja_turtle.each {|key,value| puts "#{key}'s is equal to #{value}"}
# are you sure the grammer is correct??