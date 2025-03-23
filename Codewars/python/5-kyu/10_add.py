# Codewars 10
# Title :   A chain adding function
# Question :    We want to create a function that will add numbers together when called in succession.
# Challange Url :   We want to create a function that will add numbers together when called in succession.
# Level : 5kyu


# Method : 1
class Add(int):
    def __call__(self, num):
        return Add(self+num)

def add(n):
    return Add(n)


# Method : 2
    
# Other user method
# class add(int):
#     def __call__(self,n):
#         return add(self+n)

# Debug and log
print(add(1))
print(add(1)(2))
print(add(1)(2)(3))