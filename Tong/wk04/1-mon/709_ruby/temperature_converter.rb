def temperature_converter(value, unit) 
    if unit == 'f'
        value_c = (value - 32) / 1.8
        value_k = (value + 459.67) / 1.8
        "fahrenheit: #{value} to Celsius: #{value_c}; to Kelvin:#{value_k}"
    elsif unit =='c'
        value_f = value * 1.8 + 32
        value_k = value + + 273.15
        "Celsius: #{value} to fahrenheit: #{value_f} to Kelvin:#{value_k}"
    else
        value_f = value * 1.8 - 459.67
        value_c = value - 273.15
        "Kelvin:#{value} to Celsius: #{value_c} to fahrenheit: #{value_f}"
    end
end
# puts temperature_converter(23, 'k')

puts "enter quit to stop program or press any key to continue"
value = gets.chomp
while value.downcase != 'quit'
    puts "enter unit c f or k"
    unit = gets.chomp
    puts temperature_converter(value.to_f,unit)
    puts "enter quit to stop program or press any key to continue"
    value = gets.chomp
end
