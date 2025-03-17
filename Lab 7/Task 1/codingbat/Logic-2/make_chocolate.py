def make_chocolate(small, big, goal):
    max_big = goal // 5  
    big_used = min(big, max_big)  
    remaining = goal - (big_used * 5) 
    if remaining <= small:  
        return remaining
    return -1 