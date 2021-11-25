def plusMinus(arr):
    # Write your code here
    positive = 0
    negetive = 0
    zero = 0
    length = len(arr)
    for x in arr:
        if(x>0):
            positive+=1
        elif(x<0):
            negetive+=1
        else:
            zero+=1
    print(positive/length)
    print(negetive/length)
    print(zero/length)