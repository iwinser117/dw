print("¡Bienvenido! En esta aplicación los estudiantes podrán gestionar las notas de su materia.")
name_student = input("Por favor ingrese su nombre: ")
name_topic = input("Ingrese el nombre de la materia: ")
option = "S"
percent_collector = 0
collector_average = 0
while option == "S":
    grade_earned = float(input("Ingrese la nota obtenida: "))
    percent_grade = float(input("Ingrese el porcentaje de la nota: "))
    percent_collector += percent_grade
    if percent_collector > 100:
        print("El porcentaje evaluado de una materia no puede ser mayor a 100")
        percent_collector -= percent_grade
        continue
    if percent_collector <= 100:
        collector_average += grade_earned * percent_grade
        result_grade = "reprobado"
        grade_average = collector_average / 100
        if (grade_average >= 3): result_grade = "aprobado"
        if percent_collector == 100:
            print(
                f"El estudiante {name_student.capitalize()} cursó la materia {name_topic.capitalize()} y obtuvo {grade_average:.1f} resultando en {result_grade}")
            break
        option = input("¿Falta añadir notas? S/N ")
        if option == "N":
                print(f"El estudiante {name_student.capitalize()} cursó la materia {name_topic.capitalize()} y obtuvo {grade_average:.2f} resultando en {result_grade}")    
                break