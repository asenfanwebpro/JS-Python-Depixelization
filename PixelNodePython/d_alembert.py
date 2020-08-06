import sys
import random

startingFunds = float(sys.argv[1])
wagerSize = float(sys.argv[2])
wagerCount = float(sys.argv[3])
daSampSize = float(sys.argv[4])

# startingFunds = 100
# wagerSize = 10
# wagerCount = 100
# daSampSize = 1000

counter = 1
ret = 0.0
da_busts = 0.0
da_profits = 0.0


def rollDice():
    roll = random.randint(1, 100)

    if roll <= 50:
        return False
    elif roll >= 51:
        return True


print("startingFunds = ", startingFunds)
print("wagerSize = ", wagerSize)
print("wagerSize = ", wagerCount)
print("wagerSize = ", daSampSize)

results = [startingFunds, wagerSize, wagerCount, daSampSize]
print(str(results))
sys.stdout.flush()
