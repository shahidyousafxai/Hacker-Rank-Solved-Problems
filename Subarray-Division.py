def birthday(s, d, m):
    # Write your code here
    count = 0
    for i in range(len(s) - m + 1):
        sum = s[i]
        for k in range(1, m):
            sum = sum + s[i + k]
        if sum == d:
            count += 1
    return count