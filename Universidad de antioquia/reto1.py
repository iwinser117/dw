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
for i in range(0,100+1,10):
    print(i, end=' ')
print()
 '''



print('¡Bienvenido!En esta aplicacin los estudiantes podran gestionar las notas de su materia.')
nombreEstudiante = input("Por favor ingrese su nombre:")

nombreMateria = input("Ingrese el nombre de la materia: ")

notaObtenida = float(input("Ingrese la nota obtenida: "))

porcentajeNota = int(input("Ingrese el porcentaje de la nota: "))

contadorPorcentaje = 0
seleccion=input("¿Falta añadir mas notas? S/N ")    

# seleccion  = "s" , "n"
if contadorPorcentaje <= 100:
    seleccion
    contadorPorcentaje += porcentajeNota
    # print(seleccion)
if seleccion == "s":
    print(notaObtenida)
    print(porcentajeNota)

else :
    print("chpelo")
    
# print(notaObtenida)
# print(nombreEstudiante)
# print(nombreMateria)
