# Challenge Title: Is it Even ?
# Difficulty: 8 kyu
# URL: https://www.codewars.com/kata/555a67db74814aa4ee0001b5

# Challenge Description:
# In this Kata we are passing a number (n) into a function.
# Your code will determine if the number passed is even (or not).
# The function needs to return either a true or false.
# Numbers may be positive or negative, integers or floats.
# Floats with decimal part non equal to zero are considered UNeven for this kata.

# My Solution: */

def test_even(n)
    n % 2 == 0 ? true : false # checks if 'n' is even. If 'n' modulo 2 equals 0, it returns true (indicating even), otherwise it returns false (indicating odd).
end

# Best Practice on CodeWars

def test_even(n)
    n % 2 == 0
end

# This simpler version directly returns the boolean result of the comparison
# n % 2 == 0 already evaluates to a boolean, so the ternary operator is redundant in the first solution