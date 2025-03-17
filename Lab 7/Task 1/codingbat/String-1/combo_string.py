def combo_string(a, b):
    short, long = (a, b) if len(a) < len(b) else (b, a)
    return short + long + short