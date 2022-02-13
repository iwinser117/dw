
dia = int(input("ingrese el numero para el dia de la semana del 1 al 7 ...."))

#proceso
if dia < 1 or dia > 7:
        print("ese dia no existe")
else:
        if dia == 1:
            print("el dia es lunes")



#determinar la estapa de un persona segun la siguiente informacion
#de 1 a 5 años === bebe
#de 6 a 13 == niño
#de 14 a 17 == adolecente
#18 o mas == adulto


edad = int (input("cual es su edad"))

if edad >=1 and edad <=5:
    print("es bebe")

else :
    if edad >= 6 and edad <=13:
        print("niño")
    else :
        if edad >=14 and edad <=17:
            print("adolecente")
        else :
            print("adulto")


print("gracias")