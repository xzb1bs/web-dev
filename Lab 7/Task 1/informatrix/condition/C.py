correct_ans = int(input())
student_ans = int(input())
if correct_ans == 1:
    if student_ans == 1:
        print('YES')
    else:
        print('NO')
else:
    if student_ans != 1:
        print('YES')
    else:
        print('NO')