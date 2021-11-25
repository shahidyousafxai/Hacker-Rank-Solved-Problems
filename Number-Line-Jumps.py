
def kangaroo(x1, v1, x2, v2):
    # Write your code here
    kang1=x1
    kang2=x2 
    for x in range(10000):
        if(kang1==kang2):
            return("YES")
        kang1+=v1
        kang2+=v2
    return("NO")