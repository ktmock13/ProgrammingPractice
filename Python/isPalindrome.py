str = "tact coa"

## Need to find out hwo many unique chars, and the # of odd sets

def getUniqueSets(str):
    setsOfUnique = []
    sort = sorted(str)
    cursor = 0
    for i in range(len(sort)-1):
        if not sort[i] == sort[i+1]:
            if not sort[cursor] == ' ':
                setsOfUnique.append(sort[cursor:i+1])
            cursor = i + 1
    setsOfUnique.append(sort[cursor:])
    return setsOfUnique

def oddCount(sets):
    count = 0
    for s in sets:
        if len(s) % 2 > 0:
            count+=1
    return count

def canBePalindrome(str):
    sets = getUniqueSets(str)
    if oddCount(sets) > 0:
        if oddCount(sets) == 1:
            return True
        return False
    return True


str = "a aa a  aabccbb"
print getUniqueSets(str)
print canBePalindrome(str)
