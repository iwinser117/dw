"""
NO ELIMINAR LAS SIGUIENTES IMPORTACIONES, 
El equipo de desarrollo de este calificador modificó las funciones 'print' e 'input'.
Esta modificación se hizo con la finalidad de que el sistema pueda calificar tu solución.
Por eso LEER MUY BIEN LO QUE SE SOLICITA Y LAS RESTRICCIONES QUE SE LE IMPUSIERON A ESTAS DOS FUNCIONES.
"""
from student_utilities import input, print


def solucion():
    #ACÁ INICIA LA FUNCIÓN SOLUCIÓN (En este espacio debes entregar tu solución)
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
        porce_Notas = notasAcum
        if porcentajesAcum < 100:
            opcion = input("¿Falta añadir mas notas? S/N ")
            continue
    while porcentajesAcum > 100:
        notasAcum = notasAcum - notaObtenida
        porce_Notas = porcentajesAcum - porcentajeNota
        print(porcentajesAcum)
        print("el porcentaje evaluado de una materia no puede mayor a 100")
if porcentajesAcum == 100:
    print(
        f"el estudiante {nombreEstudiante} curso la materia {nombreMateria} y obtuvo {porce_Notas} resultando aprobado")
elif opcion == "n":
    print("maracste n")


print("es dfife")
print(porcentajesAcum)
print(notasAcum)

#ACÁ TERMINA LA FUNCIÓN SOLUCIÓN
