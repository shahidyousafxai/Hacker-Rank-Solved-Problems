def breakingRecords(scores):
    # Write your code here
    max=scores[0]
    min=scores[0]
    maxcount=0
    mincount=0
    for i in range(len(scores)):
        if(scores[i]>max):
            max=scores[i]
            maxcount+=1
        elif(scores[i]<min):
            min=scores[i]
            mincount+=1
    return(maxcount, mincount)