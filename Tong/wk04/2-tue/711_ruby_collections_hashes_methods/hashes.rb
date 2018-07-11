# A
a = ["Anil", "Erik", "Jonathan"]
#return the string "Erik
a[1]
#add my name
a.push "Tong"

# B
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
#return string "One"
h[1]
#return string "Two"
h[:two]
#return number 2
h["two"]
#add {3 => "Three"}
h[3] = "Three"
#add {:four => 4}
h[:four] = 4

# C
is = {true => "It's true!", false => "It's false"}
#is[2 + 2 == 4] return value: "It's true!"
#is["Erik" == "Jonathan"] return value: "It's false"
#is[9 > 10] return :"It's false"
#is[0] return: nil
#is["Erik"] return: nil

# D
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
#access Jonathan's Twitter handle 
users["Jonathan"][:twitter]
#add the number 7 to Erik's favorite numbers
users["Erik"][:favorite_numbers].push(7)
#add yourself to the users hash
users["Tong"]={}
#return the array of Erik's favorite numbers?
users["Erik"][:favorite_numbers]
#return the smallest of Erik's favorite numbers
users["Erik"][:favorite_numbers].sort.first
#return an array of Anil's favorite numbers that are also even?
users["Anil"][:favorite_numbers].select{|n|n%2==0}
#return an array of the favorite numbers common to all users
users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers] & users["Jonathan"][:favorite_numbers]
#return an array containing all users' favorite numbers, sorted, and excluding duplicates
(users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers] | users["Jonathan"][:favorite_numbers]).sort
# or
users.values.map {|hash| hash[:favorite_numbers]}.flatten.sort.uniq