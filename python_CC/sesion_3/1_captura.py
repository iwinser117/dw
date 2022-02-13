#ejercicio, capturar 2 numeros para sumarlos

#ingresar datos

d1 = int(input("ingrese un numero entero....."))
d2 = int(input("ingrese otro numero entero..."))
d3 = float(input("ingrese otro numero entero..."))
d4 = input("ingrese input...")
#procesos
suma = d1 + d2 + d3

#salida de datos
print("la suma de los datos ingresados es " , suma)
print("la suma de ", d1, " + " , d2 , " + ", d3 , "=" , suma ," y siempre anidamos", d4) 
print("la suma de {} +  {}  + {}  = {} ".format(d1,d2,d3,suma))
print(f"la suma de {d1} es {d3} ")