# Out of 10 coins, one weighs less then the others. You have a scale.
# How can you determine which one weighs less in 3 weighs?
# Now how would you do it if you didn't know if the odd coin weighs less or more?


import random

numWeighs = 0

def generateCoinList(size):
  print "Generating", size, "random coins with one different weight..."
  # init array to store coins
  coinSet = []
  # decide on the index for the different coin
  diffCoinIndex = random.randint(0, size-1)
  # iterate through for size and add regular and 1 diff coin
  for i in range(size):
    if i != diffCoinIndex:
      coinSet.append({'id': i+1, 'weight': 1})
    else:
      coinSet.append({'id': i+1, 'weight': random.choice([0, 2])})
    print coinSet[i]
  return coinSet

def makeTrios(coinSet):
  #parts coins into 3 piles, with potential for a remainder pile
  remainder = len(coinSet) % 3
  if(remainder):
    sets = coinSet[:len(coinSet)/3], coinSet[len(coinSet)/3:(len(coinSet)/3)*2], coinSet[(len(coinSet)/3)*2:len(coinSet)-remainder], coinSet[len(coinSet)-remainder:]
  else:
    sets = coinSet[:len(coinSet)/3], coinSet[len(coinSet)/3:(len(coinSet)/3)*2], coinSet[(len(coinSet)/3)*2:], []
  print "Pile parted (3 even groups)... "
  for i in range(len(sets)):
    print sets[i]
  return sets

###
# param sets array
# diffWeight takes an array of objects {id, weight}, ret
#
#

def diffWeight(sets):
  global numWeighs
  numWeighs+=1
  print "Scale Used", numWeighs, "..."
  return reduce(lambda x,y: x+y, map(lambda x: x['weight'], sets[0]))-reduce(lambda x,y: x+y, map(lambda x: x['weight'], sets[1]))


def reduceByThirds(setData, oddWeight): # oddweight -> 1 is unknown state, 0 light, 2 heavy
  #exit case
  if len(setData) < 3:
     return { 'result': setData, 'isHeavier': oddWeight > 1 }
  #split into three groups
  groupA, groupB, groupC, groupR  = makeTrios(setData) #r
  diffAB = diffWeight([groupA, groupB])
  if not (len(setData) == 3 & oddWeight == 1):
      if not diffAB:
        diffBC = diffWeight([groupB, groupC])
        if not diffBC & len(groupR) == 1:
          return groupR
        if diffBC > 0:
          return reduceByThirds(groupC, 0)
        else:
          return reduceByThirds(groupC, 2)
      else:
        diffAC = diffWeight([groupA, groupC])
        if diffAB > 0:
          if not diffAC:
            return reduceByThirds(groupB, 0)
          else:
            return reduceByThirds(groupA, 2)
        else:
          if not diffAC:
            return reduceByThirds(groupB, 2)
          else:
            return reduceByThirds(groupA, 0)
  else:
    if diffAB == 0:
      return groupC
    else:
      if oddWeight > 1: ## looking for heavy (exit case)
        return groupA if diffAB > 0 else groupB
    else: ##  looking for light (exit case)
        return groupA if diffAB < 0 else groupB


#for now only efficient with #'s  3^n and (3^n)+1
coins  = generateCoinList(3)
c = reduceByThirds(coins, 1)
print c
