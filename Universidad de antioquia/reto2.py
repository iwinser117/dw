# POR FAVOR LEA TODAS LAS INDICACIONES SUMINISTRADAS EN EL
# ENUNCIADO ANTES DE EMPEZAR A IMPLEMENTAR SU SOLUCIÓN

# NO MODIFICAR EL NOMBRE, PARÁMETROS O RETORNO DE LA FUNCIÓN
def modificar_materia(pensum, semestre, materia, nombre, creditos):
    # ACÁ INICIA LA FUNCIÓN modificar_materia (En este espacio debes
    # poner el código necesario para implementar esta funcionalidad)
    creditos = 0
    semestre = 0
    mensaje = "Modificada con éxito"
    nombre = " "
    materia = 0
    pensum = [
        {'0123': {'nombre': 'intro a la ing', 'créditos': 2},
         '4567': {'nombre': 'inglés', 'créditos': 1}},
        {},
        {}
    ]
    while semestre == 1:
      semestre = int(input("Ingrese el semestre a Evaluar:"))
      semestre -= 1
      if semestre < 0 or semestre > 2:
          print('Ingrese un semestre válido')
      elif semestre > 0 and semestre <= 2:
          print("el semestre no tiene materias")
      if semestre == 0:
          materia = str(input('Ingrese el codigo de la materia: '))
      # elif materia != '0123':
      #    print('La materia no existe')
          if materia == "0123":
              nom_materia = str(input('Ingrese el nombre de la materia que desea modificar '))
              creditos = int(input('Ingrese el numero de creditos de la materia que modifico '))
              #pensum[0]['0123']['nombre'] = nombre
              pensum[0]["0123":{"nombre"}.append(nombre)]
              pensum[0]['0123']['creditos'] = creditos

              pensum = [
                  {'0123': {'creditos': creditos, 'nombre': nombre},
                   '4567': {'creditos': 1, 'nombre': 'inglés'}},
                  {},
                  {}]
              print(pensum)
              break
          print(mensaje)

    # ACÁ TERMINA LA FUNCIÓN modificar_materia
    # NO MODIFIQUES LA SIGUIENTE LÍNEA
    return mensaje
