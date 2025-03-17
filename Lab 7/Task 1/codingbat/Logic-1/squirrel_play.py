def squirrel_play(temperature, is_summer):
    upper_limit = 100 if is_summer else 90
    return 60 <= temperature <= upper_limit