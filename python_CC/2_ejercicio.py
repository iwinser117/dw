# 1.	6 * 5^3 / 5 div 3
# solucion al primer ejercicio

a = ((6 * (5 **3) / 5) // 3)
print("resultadoo del primer ejercicio")
print(a)


""" observacion

realizo este primer ejercicio validando que con los signos de agrupacion  o sin ellos el resultado es el mismo """

# 2.	4*2*(160 mod 3 ^ 3) div 5*13-28
# print("para modulo es % y para div es //")
print("\n sobre el ejercicio 2 \n")

b = 4 * 2 * (160 % (3 ** 3)) // (5 * 13 )- 28
c = 4 * 2 * (160 % 3 ** 3) // 5 * 13 - 28
print("tengo la siguiente cuestion, \n realizando la ejecuacion de la ecuacion sin los signos de agrupacion correspondiente para la respectiva precedencia de operadores se ejecuta un reulatdo diferente a que si no se agrupa teniendo en cuenta las reglas y la importancia de los operadores")

print("\n  \n  resultado agrupando respctivamente   \n")
print(b)



print("\n  \n  resultado sin agrupar   \n")


print(c)


# 3.	15/3*(7+(68-15*33+(45 ^ 2/5)/3)/2)+19
print("\n ejercicio 3 \n")

d = 15 / 3 * 7 + (68 - 15 * 33 + (45 ** 2 / 5)/3)/2+19
print("\n y dejando correr sin agrupar por precedencia se ejecuta y da este resultado")
print(d)