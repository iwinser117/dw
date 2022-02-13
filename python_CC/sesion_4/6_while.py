suma = 0
prom= 0


cn =int (input("¿cunatas notas a promediar?"))
vi = 1
while vi <= cn:
    nota = float (input("ingrese su nota n°{}....... ".format(vi)))
    suma += nota
    vi +=1
print("la suma de nota es    ", suma)
prom = suma/3
print("la usma de notas es .. {1}  y el promedio es{0} ".format(prom,suma))