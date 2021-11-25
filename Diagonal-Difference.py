def diagonalDifference(arr):
    # Write your code here
    first =0
    second=0
    length = len(arr[0])
    for count in range(length):
        first += arr[count][count]
        second += arr[count][(length-count-1)]
    return abs(first-second)
