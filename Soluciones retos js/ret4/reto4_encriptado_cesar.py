from functools import reduce


abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
       'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
mensaje = "U DE A"
b = 7
def encriptar_caracter(caracter, b):
    caracter_encriptado= ""
    for letra in caracter:
        suma = abc.index(letra)+b
        modulo = int (suma) % len(abc)
        caracter_encriptado=caracter_encriptado +str(abc[modulo])
    return caracter_encriptado
v=encriptar_caracter("A",7)
print(v)


l1=[1, 2, 3, 4]
l2 = list(map(lambda x: x**2,l1))
print(l2)

l3 = [2, 2, 2, 2, 2]
l4 = reduce(lambda a, b: a*b ,l3)
print(l4)


"""def encriptar(mensaje, b):

    return mensaje_encriptado


def desencriptar_caracter(caracter_encriptado, b):

    return caracter_desencriptado


def desencriptar(mensaje_encriptado, b):

    return mensaje_desencriptado
"""