# Challenge Title: Is it a Palindrome ?
# Difficulty: 8 kyu
# URL: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4

# Challenge Description:
# Write a function that checks if a given string (case insensitive) is a palindrome.
# A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

# My Solution: */

def is_palindrome str
    string = str.downcase # Convert the input string to lowercase to ensure the comparison is case-insensitive
    string === string.reverse # Check if the lowercase string is equal to its reverse (to determine if it's a palindrome)
end

# Clever Solution on CodeWars:

def is_palindrome str
    str.casecmp?(str.reverse) 
end

# casecmp? performs a case-insensitive comparison between the original string and its reversed version.