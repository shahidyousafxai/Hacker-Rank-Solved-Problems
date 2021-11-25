def getTotalX(a, b):
    # Write your code here
    mini=min(a)
    maxi=max(b)
    count=0
    array_fact=[]
    for i in range(mini, maxi+1):
        condition_a=True
        for j in range(len(a)):
            if(i%a[j]==0):
                pass
            else:
                condition_a=False
        if(condition_a==True):
            array_fact.append(i)
    for k in range(len(array_fact)):
        for l in range(len(b)):
            condition_b=True
            if(b[l]%array_fact[k]==0):
                pass
            else:
                condition_b=False
                break
        if(condition_b==True):
            count+=1
    return count
