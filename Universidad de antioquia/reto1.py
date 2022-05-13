print("¡Bienvenido! En esta aplicación los estudiantes podran gestionar las notas de su materia.")
nameEstudiante = input("Por favor ingrese su nombre: ")
nameMateria = input("Ingrese el nombre de la materia: ")
opcion = "s"
notasAcum = 0
porcentajesAcum = 0
while opcion == "s":
    notaObtenida = float(input("Ingrese la nota obtenida: "))
    porcentajeNota = float(input("Ingrese el porcentaje de la nota: "))
    notasAcum += notaObtenida
    porcentajesAcum += porcentajeNota
    notaPromedio = (notasAcum * porcentajesAcum) / 100
    if porcentajesAcum > 100:
            print("El porcentaje evaluado de una materia no puede ser mayor a 100")
            notasAcum = notasAcum - notaObtenida
            porcentajesAcum = porcentajesAcum - porcentajeNota
            continue
    elif porcentajesAcum == 100:
            reportFinal = print(f"El estudiante {nameEstudiante.capitalize()} cursó la materia {nameMateria.capitalize()} ")
            break
    elif porcentajesAcum < 100 and opcion == "s":
            opcion = input("¿Falta añadir mas notas? S/N ")
            if opcion == "n":
                reportFinal = print(
                    f"El estudiante {nameEstudiante.capitalize()} cursó la materia {nameMateria} y")
                break
           
