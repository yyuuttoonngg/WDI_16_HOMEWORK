# 1
def lengths arr_of_strs
    number =[]
    arr_of_strs.each{|str|  number.push str.length}
    return number
end
#p lengths ["hello", "what", "is", "up", "dude"]

# 2
def transmogrifier a, b, c
    return (a * b) ** c
end
#p transmogrifier(5,4,3)

# 3
def toonify accent, sentence
    if accent == "daffy"
        return sentence.gsub!("s","th")
    elsif accent == "elmer"
        return sentence.gsub!("r","w")
    else return sentence
    end
end
#p toonify "daffy","strings"

# 4
def word_reverse str
    str.split(" ").reverse.join(" ")
end
#p word_reverse ("Now I know what a TV dinner feels like")

# 5
def letter_reverse str
    str.split(/(\w+)/).each{|word|word.reverse!}.join("")
end
#p letter_reverse("Now I know what a TV dinner feels like")

# 6
def longest arr
    arr.inject do |memo, word|
        memo.length > word.length ? memo : word
    end
end
#p longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])



