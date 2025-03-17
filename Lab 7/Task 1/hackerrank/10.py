if __name__ == '__main__':
    students = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])
    
    students.sort(key=lambda x: x[1])  
    second_lowest = sorted(set(score for _, score in students))[1]  
    names = sorted([name for name, score in students if score == second_lowest])  
    for name in names:
        print(name)
