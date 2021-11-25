def birthdayCakeCandles(candles):
    # Write your code here
    count=0
    tall=max(candles)
    for i in range(len(candles)):
        if(candles[i]==tall):
            count+=1
    return count