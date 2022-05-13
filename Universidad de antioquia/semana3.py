pintas=["corazones", "diamantes" , "treboles", "picas"]
tantos = ["A",2, 3, 4, 5, 6, 7, 8, 9, 10 ,"j", "q", "k"]
cartas = []

for pinta in pintas:
    for tanto in tantos:
        carta=(f"{tanto} de {pinta}")
        cartas.append(carta)
print(f"{cartas}")

#densidad = masa / volumen

#para calcular la densidad

masa = 7
volumen = 5
densidad = masa / volumen
print(densidad)


# a = 5
# b = 7
# salida = False
# while salida == False:
#     print("""
#         Menu.
#         1.Suma
#         2.Resta
#         3.multiplicar
#         4.Potencia
#         0.Salir
#         """)

#     op = eval(input("digite la opcion"))
#     if op == 1:
#         print(a + b)
#     elif op == 2:
#         print(a-b)
#     elif op == 3:
#         print(a*b)
#     elif op == 4:
#         print(a ** b)
#     elif op == 0:
#         salida = True
#         #break
#     else:
#         print("opcion no valida")


#ciclo for
''' 

for i in range(0, 10):
    print(i, end =' ')
print()


    print(i, end=' ')
print()
 '''
