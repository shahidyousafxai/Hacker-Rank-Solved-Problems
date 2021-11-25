def miniMaxSum(arr):
    # Write your code here
    sum=0
    for x in arr:
        sum=sum+x
    print(sum-max(arr), sum-min(arr))