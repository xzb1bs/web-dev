def round10(num):
    if num % 10 >= 5:
        return (num // 10 + 1) * 10
    else:
        return (num // 10) * 10

def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)