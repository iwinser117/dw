# determinar si una persona es apta para el servicio militar
#si tiene 18 años o mas y es soltero, genere un reporteque indique si es pto o no


#ingreso de datos
from ast import Str


nombre = input("cual es su nombre")
edad = int (input("escriba su edad.."))
civil = input("cual es us estado civil....")

#proceso
if edad >= 18 and (civil == "soltero" or civil == "SOLTERO"):
    print("el sr {} es apto para el servicio ".format(nombre))

else:
     print("el señor {} NO es apto ".format(nombre))

#salida de datos