import random
pintas=["Corazones", "Diamantes", "Picas", "Treboles"]
tantos = ["A","2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "k"]
cartas =[]
for pinta in pintas:
        for tanto in tantos:
            carta=f"{tanto} de {pinta}"
            cartas.append(carta)
#print(cartas)


nueva =[]
n=int(input("ingrese el total de filas"))
matriz=[]
for filas in range(n):
    #llenar un renglon o fila
    listas=[]
    for columnas in range (n) :
        l= random.randint(1,5)
        listas.append(l)
    matriz.append(listas)
#print(listas)
#print(matriz)

#mostrar matriz
for filas in range(n):
    for columnas in range(n):   
        print(matriz[filas][columnas], end=" ")
    print()




#mostrar diagonal principal con color
for filas in range(n):
    for columnas in range (n):
        if filas==columnas:
            print("\033[0;31m"+str(matriz[filas][columnas]), end=" ")
        else:
            print("\033[2;37m"+str(matriz[filas][columnas]), end=" ")
    print()

