print("¡Bienvenido! En esta aplicación los estudiantes podran gestionar las notas de su materia.")
n_Estudiante = str(input("Por favor ingrese su nombre: ")).upper()
n_Materia =str(input("Ingrese el nombre de la materia: ")).capitalize()
notaObteTotal = 0
notaObte = float(input("Ingrese la nota obtenida: "))
#el porcentaje de la nota no puede ser mayor que 100 si es mayor imprimr tal cosa y retormar al paso previo 
#si porcentaje es igual a 100 imprimir rta si  o si es menor que 100 vueve y pregunta
porcen_Obtenido = float(input("Ingrese el porcentaje de la nota: "))
# nota acumulada debe ser aprobada si es mayor o igual a 3  
nota_Acum = (notaObteTotal * porcen_Obtenido)/100
#creo variable informal
porAcum = 0
# 3.5 * 25 + 4.5 * 25 + 3.7 *25 + 3.3 * 25 
    

print(nota_Acum)
print(notaObteTotal)
