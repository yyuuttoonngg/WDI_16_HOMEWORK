class Animal
    def initialize (*arr)
        if arr != []
            @name_animal = arr[0]
            @age_animal = arr[1]
            @gender = arr[2]
            @specie =arr[3]
            @toys=[]
        else 
            name
            age
            gender
            specie
        end
    end
    def name
        p "what's the name of the animal?"
        @name_animal = gets.chomp
    end
    
    def age
        puts "the age of the animal"
        @age_animal  = gets.chomp.to_i
    end

    def gender
        puts "gender of animal"
        @gender = gets.chomp 
    end

    def specie 
        puts "the specie of the animal"
        @specie = gets.chomp
    end

    def give_toy 
        puts "give the animal a toy?"
        @toys.push (gets.chomp)
    end
end

