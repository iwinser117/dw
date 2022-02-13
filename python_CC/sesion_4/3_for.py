suma = 0
prom= 0
cn =int (input("¿cunatas notas a promediar?")) 
for i in range( 1, cn + 1):
    nota = float (input("ingrese su nota n°{}....... ".format(i)))
    suma =suma + nota

print("la suma de nota es    ", suma)
prom = suma/3
print("la usma de notas es .. {1}  y el promedio es{0} ".format(prom,suma))

