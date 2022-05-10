print('¡Bienvenido!En esta aplicacin los estudiantes podran gestionar las notas de su materia.')
nombreEstudiante = input("Por favor ingrese su nombre:")
nombreMateria = input("Ingrese el nombre de la materia: ")
porcentajesAcum = 0
notasAcum = 0
opcion = "s"
porce_Notas = 0
while porcentajesAcum < 100 and opcion == "s":
    while porcentajesAcum < 100 and opcion == "s":
        notaObtenida = float(input("Ingrese la nota obtenida: "))
        porcentajeNota = int(input("Ingrese el porcentaje de la nota: "))
        notasAcum += notaObtenida
        porcentajesAcum = porcentajesAcum + porcentajeNota
        porce_Notas += notasAcum+(porcentajesAcum)
        if porcentajesAcum < 100:
            opcion = input("¿Falta añadir mas notas? S/N ")
            continue
    while porcentajesAcum > 100:
        notasAcum = notasAcum - notaObtenida
        porce_Notas = porcentajesAcum - porcentajeNota
        print(porcentajesAcum)
        print("el porcentaje evaluado de una materia no puede mayor a 100")
if porcentajesAcum == 100:
    print(f"el estudiante {nombreEstudiante} curso la materia {nombreMateria} y obtuvo {porce_Notas} resultando aprobado")
elif opcion == "n":
    print("maracste n")


print("es dfife")
print(porcentajesAcum)
print(notasAcum)
