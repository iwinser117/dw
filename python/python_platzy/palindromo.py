#se crea una funcion y recibe como parametro palabra
def palindromo(palabra):
    palabra = palabra.replace(" ","")
    palabra = palabra.lower()
    #el lower es para volverla en minuscula
    #y ahora voy a tomar la palabra y la voy a invertir
    palabra_invertida = palabra[::-1]
    #y con ::-1 volteamos la palabra alreves ya que es un slice
    #y preguntamos lo siguiente
    if palabra == palabra_invertida:
        return True
    else :
        return False
palabra = input("Escribe la palabra")
#se crea una variable lo que es es_palindromo
es_palindromo = palindromo(palabra)
#se le asigna funcion y trabaja con palabra
if es_palindromo == True:
    print("Es palindromo")
else :
    print("No es palindromo")
