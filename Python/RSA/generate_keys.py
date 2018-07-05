#this file will generate two keys, public and private
import random

# functions

def isPrime(n):
  if n <= 2: return False
  for i in range(2, int(n**0.5)+1):
    if n%i==0: return False
  return True 

def randomPrimeBtw(a,b):
  r = random.randint(a,b)
  while not isPrime(r):
    r = random.randint(a,b) 
  return r

def findGCD(a,b):
  if b == 0:
   return a
  else:
   return gcd(b, a % b)

# choose two random prime numbers, similiar in magnitude but not the same
p = 3 # randomPrimeBtw(3, 99)
q = 11 # randomPrimeBtw(101, 999)
print "p = %d" % p
print "q = %d" % q

# create the modulus for the public and private keys
n = p*q
print "n bit length = %d" % n
# find phi(n)
phi_n = (p-1) * (q-1)

# compute e as a coprime of phi_n
e = 7 #randomPrimeBtw(1,phi_n)
d = p * ((p*e)%phi_n)

# choose public key
pub_key = {'n': n, 'e': e}
priv_key = {'n': n, 'd': d}

 
print pub_key
print priv_key
print "p = %d, q = %d, n = %d, phi_n = %d" % (p,q,n,phi_n)
m = 2
print "sample message: %d" % (m)

# encrypt with public key
m_cypher = (m**e)%n
print "m_cypher = %d" % (m_cypher)

# decrypt with private key
m_decrypted = (m_cypher**d)%n
print "m_decrypted: %d" % m_decrypted
