import random 
from random import choice
letra=["B", "I", "N", "G", "O"]
numero_aleatorio =[]
balotas = []

#print(b_mezcla)
for letras in letra[0]:
    for l in range(1,16):
        #numero_aleatorio = str(random.randint(1,15))
        #mezcla=f"{letras}{numero_aleatorio}"
        mezcla=f"{letras}{l}"
        #print(numero_aleatorio)
        balotas.append(mezcla)
#print(balotas)

for letras in letra[1]:
    for l in range(16, 31):
        mezcla = f"{letras}{l}"
        balotas.append(mezcla)
#print(balotas)
for letras in letra[2]:
    for m in range(31, 46):
        mezcla = f"{letras}{m}"
        balotas.append(mezcla)
        #hola = random.choice(mezcla)
        #print(hola)
#print(balotas)
for letras in letra[3]:
    for l in range(46,61):
        mezcla = f"{letras}{l}"
        balotas.append(mezcla)
#print(balotas)
for letras in letra[4]:
    for l in range(61, 76):
        mezcla = f"{letras}{l}"
        balotas.append(mezcla)

random.shuffle(balotas)
print(balotas)
#print(f"estas son las balotas {random.shuffle(balotas)}")

balotas_minimas = (random.choices(balotas))
print(balotas_minimas)
