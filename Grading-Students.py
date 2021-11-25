def gradingStudents(grades):
    # Write your code here
    for x in range(len(grades)):
        if(grades[x]>37):
            if(grades[x]%5!=0):
                rem=5-(grades[x]%5)
                if(rem<3):
                    grades[x]+=rem
    return grades