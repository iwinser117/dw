print('¡Bienvenido!En esta aplicacin los estudiantes podran gestionar las notas de su materia.')
nombreEstudiante = input("Por favor ingrese su nombre:")
nombreMateria = input("Ingrese el nombre de la materia: ")
porcentajesAcum = 0
notasAcum = 0
opcion = "s"
while porcentajesAcum < 100 and opcion == "s":
    notaObtenida = float(input("Ingrese la nota obtenida: "))
    porcentajeNota = int(input("Ingrese el porcentaje de la nota: "))
    notasAcum += notaObtenida
    porcentajesAcum = porcentajesAcum + porcentajeNota
    if opcion == "s":
        opcion = input("¿Falta añadir mas notas? S/N ")
    if opcion == "n":
        print("maracste n")
        break
    elif porcentajesAcum > 100:
        notasAcum = notasAcum - notaObtenida
        porcentajesAcum = porcentajesAcum - porcentajeNota
        print(porcentajesAcum)
        print("el porcentaje evaluado de una materia no puede mayor a 100")

    elif porcentajesAcum == 100:
        print("hola mundo")
        break


print("es dfife")
print(porcentajesAcum)
print(notasAcum)


else:
    opcion = input("¿Falta añadir mas notas? S/N ")


print('¡Bienvenido!En esta aplicacin los estudiantes podran gestionar las notas de su materia.')
nombreEstudiante = input("Por favor ingrese su nombre:")
nombreMateria = input("Ingrese el nombre de la materia: ")
porcentajesAcum = 0
notasAcum = 0
opcion = "s"
if porcentajesAcum < 100 and opcion == "s":
    while porcentajesAcum > 100:
        notasAcum = notasAcum - notaObtenida
        porcentajesAcum = porcentajesAcum - porcentajeNota
        print(porcentajesAcum)
        print("el porcentaje evaluado de una materia no puede mayor a 100")
        notaObtenida = float(input("Ingrese la nota obtenida: "))
        porcentajeNota = int(input("Ingrese el porcentaje de la nota: "))
        notasAcum += notaObtenida
        porcentajesAcum = porcentajesAcum + porcentajeNota
        opcion = input("¿Falta añadir mas notas? S/N ")
