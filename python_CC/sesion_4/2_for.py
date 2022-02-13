#imprimir los numeros 1 hatsa el 20



# for i in range(1,21):
#     print("dato...{}".format(i))

#solicitar al usuario indique hasta que numero quiere ver
#la secuencia inicia en 1

""" vf = int(input("indique el avlor final"))
vi = int(input("indique el valor inicial"))

for i in range (vi-1,vf):
    print("dato...{}".format(i+1)) """


#indica el valor inicial y el final pero con un aumento que el ususario quiera

vi = int(input("indique el avlor inicial..."))
vf = int(input("indique el avlor final..."))
au = int(input("indique el aumento...."))

for i in range(vi, vf, au):
    print("dato...{}".format(i))