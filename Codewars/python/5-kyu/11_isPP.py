# Codewars 11
# Title :   What's a Perfect Power anyway?
# Question :   Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof.
# Challange Url :  https://www.codewars.com/kata/54d4c8b08776e4ad92000835/train/python
# Level : 5kyu

from math import isqrt, log

# Method : 1
def isPP(n):
    for base in range(2, isqrt(n) + 1):
        exp = round(log(n, base))  
        if base ** exp == n:
            return [base, exp]
    return None

# Method : 2
def isPP(n):
    for i in range(2, n+1):
        for j in range(2, n+1):
            if i**j > n:
                break
            elif i**j == n:
                return [i, j]
    return None
    
# Other user method

# Debug and log
print(isPP(4))   
print(isPP(9))   
print(isPP(5))   
print(isPP(25))  
print(isPP(27))  
print(isPP(64)) 