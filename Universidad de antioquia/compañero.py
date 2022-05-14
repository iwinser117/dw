# Reto 1 Fundamentos de Programacion - Saber si los Estudiantes Aprobaron la Materia
print("¡Bienvenido! En esta aplicación los estudiantes podrán gestionar las notas de su materia.")
nombre = str(input("Por favor ingrese su nombre: "))
materia = str(input("Ingrese el nombre de la materia: "))
contador = 0
conteo_porcentaje = 0
porcentaje = 0
nota_1 = 0
nota_acumulada = 0
resultado_de_aprobacion = 0
dato = "N"
while True:
    nota = eval(input("Ingrese la nota obtenida: "))
    porcentaje_nota = eval(input("Ingrese el porcentaje de la nota: "))
    conteo_porcentaje += porcentaje_nota
    if porcentaje_nota < 0 or porcentaje_nota > 100 or conteo_porcentaje < 0 or conteo_porcentaje > 100 or nota < 0 or nota > 5:
        print("El porcentaje evaluado de una materia no puede ser mayor a 100")
        conteo_porcentaje -= porcentaje_nota
        dato = str(input("¿Falta añadir notas? S/N "))
    elif porcentaje_nota <= 100 or porcentaje_nota == "N" or conteo_porcentaje < 100 or porcentaje < 100 or nota < 5:
        nota_1 = nota*porcentaje_nota/100
        nota_acumulada += nota_1
        porcentaje += porcentaje_nota
        dato = str(input("¿Falta añadir notas? S/N "))
        resultado_de_aprobacion = nota_acumulada
        if resultado_de_aprobacion >= 3:
            resultado_de_aprobacion = "aprobado"
        elif resultado_de_aprobacion <= 3:
            resultado_de_aprobacion = "reprobado"
        if dato == "N":
            print(f"El estudiante {nombre} curso la materia {materia} y obtuvo {nota_acumulada:.2f} resultado en {resultado_de_aprobacion}")
            break
        else:
            if porcentaje == 100:
                print(f"El estudiante {nombre} curso la materia {materia} y obtuvo {nota_acumulada:.2f} resultado en {resultado_de_aprobacion}")
                break
