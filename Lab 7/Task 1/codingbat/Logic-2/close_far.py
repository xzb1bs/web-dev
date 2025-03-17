def close_far(a, b, c):
    close = abs(a - b) <= 1 or abs(a - c) <= 1
    far = (abs(a - b) >= 2 and abs(b - c) >= 2) or (abs(a - c) >= 2 and abs(b - c) >= 2)
    return close and far