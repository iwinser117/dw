print('¡Bienvenido!En esta aplicacin los estudiantes podran gestionar las notas de su materia.')
nombreEstudiante = input("Por favor ingrese su nombre:")
nombreMateria = input("Ingrese el nombre de la materia: ")
contadorPorcentaje = 0
porcentajesAcum = 0
notasAcum = 0
opcion = "s"
while opcion == "s":
    notaObtenida = float(input("Ingrese la nota obtenida: "))
    porcentajeNota = int(input("Ingrese el porcentaje de la nota: "))
    opcion = input("¿Falta añadir mas notas? S/N ")
    if opcion == "n":
        
        print("es dfife")
        porcentajesAcum += porcentajeNota
        notasAcum += notaObtenida
print(porcentajesAcum)
print(notasAcum)
