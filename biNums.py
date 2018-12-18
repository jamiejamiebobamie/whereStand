import random

def convert_to_Binary(num):
    """Takes in an int and returns the number in binary of base 2."""
    number = num
    bi = ""
    if number >= 256:
        bi += '1'
        number -= 256
    else:
        bi += '0'
    if number >= 128:
        bi += '1'
        number -= 128
    else:
        bi += '0'
    if number >= 64:
        bi += '1'
        number -= 64
    else:
        bi += '0'
    if number >= 32:
        bi += '1'
        number -= 32
    else:
        bi += '0'
    if number >= 16:
        bi += '1'
        number -= 16
    else:
        bi += '0'
    if number >= 8:
        bi += '1'
        number -= 8
    else:
        bi += '0'
    if number >= 4:
        bi += '1'
        number -= 4
    else:
        bi += '0'
    if number >= 2:
        bi += '1'
        number -= 2
    else:
        bi += '0'
    if number >= 1:
        bi += '1'
        number -= 1
    else:
        bi += '0'
    if number != 0:
        return "The number entered is too high. Please enter an integer equal to 511 or below."
    return bi


def convert_from_Binary(num):
    """Takes in a number in binary of base 2 and returns an integer."""
    dec = 0
    numb = str(num)
    if numb[0] != "1" and numb[0] != "0":
        return ("Please enter a number in binary.")
    if len(numb) > 9:
        return "Sorry this function only converts binary numbers that are equal to 511 or below."
    numb = (9 - len(numb))*"0" + numb
    if numb[0] == "1":
        dec += 256
    if numb[1] == "1":
        dec += 128
    if numb[2] == "1":
        dec += 64
    if numb[3] == "1":
        dec += 32
    if numb[4] == "1":
        dec += 16
    if numb[5] == "1":
        dec += 8
    if numb[6] == "1":
        dec += 4
    if numb[7] == "1":
        dec += 2
    if numb[8] == "1":
        dec += 1
    return dec


def find_highest_Pow(num):
    """Takes in a number in binary of base 2 and returns the highest power."""
    numb = str(num)
    if numb[0] != "1" and numb[0] != "0":
        return ("Please enter a number in binary.")
    if len(numb) > 9:
        return "Sorry this function only converts binary numbers that are equal to 511 or below."
    numb = (9 - len(numb))*"0" + numb
    if numb[0] == "1":
        return 256
    if numb[1] == "1":
        return 128
    if numb[2] == "1":
        return 64
    if numb[3] == "1":
        return 32
    if numb[4] == "1":
        return 16
    if numb[5] == "1":
        return 8
    if numb[6] == "1":
        return 4
    if numb[7] == "1":
        return 2
    if numb[8] == "1":
        return 1

def winner():
    """Calculating the 'winner' of the Josephus Problem."""
    n = random.randint(1,41)
    # n = 7 #apparently this 'trick' only works for the number 41...
    # b = convert_to_Binary(n)
    # print(n, b)
    # print(convert_from_Binary(b[4:9]+b[3]), b[4:9]+b[3])
    b = convert_to_Binary(n)
    p = find_highest_Pow(b)
    print(n, b, p)
    winner = 2*(n - p) + 1
    return winner

print(winner())
