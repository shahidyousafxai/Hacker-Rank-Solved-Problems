def bonAppetit(bill, k, b):
    # Write your code here
    count=0
    for i in range(len(bill)):
        if(i!=k):
            count+=bill[i]
    pay = count//2
    if(pay != b):
        print(b-pay)
    else:
        print("Bon Appetit")