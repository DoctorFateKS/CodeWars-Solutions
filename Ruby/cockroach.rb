# Challenge Title: Cockroach
# Difficulty: 8 kyu
# URL: https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6

# Challenge Description:
# The cockroach is one of the fastest insects.
# Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

# My Solution: */

def cockroach_speed(s)
    (s * 27.778).floor(); # Convert speed to cm/s by multiplying by 27.778 and apply the floor method to round the result.
end