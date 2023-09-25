# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# name : even_or_odd
# input : number
# output : number and string
# process : have a conditional statement check to see if the number is even or odd, then use string interlopation

def even_or_odd number # method that takes a number as a parameter
    if number % 2 == 0 # cinditional that will check if number is even
        p "#{number} is even" # will use string interpolation and output for even
    else # any other number will be odd
        p "#{number} is odd" # will use string interpolation and output for odd
    end 
end
even_or_odd(reposts1)
even_or_odd(reposts2)
even_or_odd(reposts3)
# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# name : remove_vowels
# input : string
# output : string
# process : method will use .delete to remove the vowels in lower case and upper case

def remove_vowels string # method will take a string as a parameter
    string.delete "aeiouAEIOU" # will delete the characters aeiouAEIOU using .delete
end
p remove_vowels(beatles_album1)
p remove_vowels(beatles_album2)
p remove_vowels(beatles_album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# name : is_palindrome
# input : string
# output : string
# process : will have a conditional that will check if the lowercased string is equal to the lowercased string in reverse and use string interpolation to output

def is_palindrome string # method will take a string as a parameter
    if string.downcase == string.downcase.reverse # conditional will check if the lowercased string is equal to the lowercased string in reverse
        p "#{string} is palindrome" # string interpolation is used to display a message "is palindrome"
    else # this will catch the words that do not equal the same reversed and lowercased
        p "#{string} is not palinedrome" # string interpolation is used to display a message "is palindrome"
    end 
end
is_palindrome(palindrome_test_case1)
is_palindrome(palindrome_test_case2)
is_palindrome(palindrome_test_case3)