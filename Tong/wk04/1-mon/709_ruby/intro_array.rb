#https://gist.github.com/epoch/5fc4fc96b27b55d7f282506c29ed2ab8#file-week4_ruby_intro_homework-md

## arrays practice
days_of_the_weeks = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

# first day is Sunday
puts days_of_the_weeks.unshift(days_of_the_weeks.pop)
puts '-'

# work days and weekend days
week_days =[]
weekend_days =[]
array_of_days = [week_days,weekend_days]
days_of_the_weeks.each do |day|
    if day!= 'Saturday' && day != 'Sunday'
        week_days.push(day)
    else weekend_days.push(day)
    end
end
print array_of_days
puts '-'

# delete weekend_days array
new_days = array_of_days.shift
puts new_days
puts '-'

# sort remaining days alphabetically
puts new_days.sort!
puts '-'


        



