pintas=["corazones", "diamantes" , "treboles", "picas"]
tantos = ["A",2, 3, 4, 5, 6, 7, 8, 9, 10 ,"j", "q", "k"]
cartas = []

for pinta in pintas:
    for tanto in tantos:
        carta=(f"{tanto} de {pinta}")
        cartas.append(carta)
print(f"{cartas}")