def make_bricks(small, big, goal):
    return goal % 5 <= small and goal - (big * 5) <= small