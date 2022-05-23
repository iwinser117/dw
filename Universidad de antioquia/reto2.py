# POR FAVOR LEA TODAS LAS INDICACIONES SUMINISTRADAS EN EL
# ENUNCIADO ANTES DE EMPEZAR A IMPLEMENTAR SU SOLUCIÓN

# NO MODIFICAR EL NOMBRE, PARÁMETROS O RETORNO DE LA FUNCIÓN
def modificar_materia(pensum, semestre, materia, nombre, creditos):
    # ACÁ INICIA LA FUNCIÓN modificar_materia (En este espacio debes
    # poner el código necesario para implementar esta funcionalidad)
    pensum = [
        {'0123': {'nombre': 'intro a la ing', 'créditos': 2},
         '4567': {'nombre': 'inglés', 'créditos': 1}},
        {},
        {}
    ]
    semestre = int(0)
    materia = str(0)
    nombre = 0
    creditos = 0
    mensaje = "Modificada con éxito"

    semestre = int(input("Ingrese el Semestre a Evaluar: "))
    semestre -= 1
    if semestre < 0 or semestre > 2:
        mensaje = "Ingrese un semestre válido"
        print(mensaje)
    elif semestre > 0 and semestre <= 2:
        mensaje = "El semestre no tiene materias"
        print(mensaje)
    elif semestre == 0:
        materia = input('Ingrese el codigo de la materia')
        if materia != "0123":
            mensaje = "La materia no existe"
            print(mensaje)
        print(mensaje)

    # ACÁ TERMINA LA FUNCIÓN modificar_materia
    # NO MODIFIQUES LA SIGUIENTE LÍNEA
    return mensaje
