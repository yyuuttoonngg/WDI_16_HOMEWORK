class Client 
    def initialize (*arr)
        if arr != []
            @name_client = arr[0]
            @num_of_children = arr[1]
            @age_client = arr[2]
            @pets =[]
        else 
            puts "enter client name"
            @name_client = gets.chomp
            puts "how many children dose the client have?"
            @num_of_children = gets.chomp.to_i
            puts "client's age"
            @age_client = gets.chomp.to_i        
        end
    end

    def get_pets pet
        @pets.push pet
    end
end


