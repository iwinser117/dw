# tablas de multiplicar con ciclo while
cst = int(input("que tabla desea...."))
vi = 1
vf = 10
while vi <= vf :
    rta = vi * cst
    print(" {} * {} = {}".format(vi,cst,rta))
    vi += 1