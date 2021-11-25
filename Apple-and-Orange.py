def countApplesAndOranges(s, t, a, b, apples, oranges):
    # Write your code here
    apple_count=0
    orange_count=0
    for ap in range(len(apples)):
        if((apples[ap]+a)>=s and (apples[ap]+a)<=t):
            apple_count+=1
    print(apple_count)
    for orng in range(len(oranges)):
        if((oranges[orng]+b)>=s and (oranges[orng]+b)<=t):
            orange_count+=1
    print(orange_count)