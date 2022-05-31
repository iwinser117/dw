import random 

letra=["B", "I", "N", "G", "O"]
numero_aleatorio =[]
balotas = []
balotas_minimas0=[]
balotas_minimas1=[]
balotas_minimas2=[]
balotas_minimas3 = []
balotas_minimas4=[]
balotas_minimas=[]
#balotas_minimas= [balotas_minimas0],[balotas_minimas1],[balotas_minimas2],[balotas_minimas3],[balotas_minimas4]


#print(b_mezcla)
for letras in letra[0]:
    for l in range(1,16):
        mezcla_c=f"{letras}{l}"
        balotas.append(mezcla_c)
        balotas_minimas0.append(mezcla_c)
    balotas_minimas0 = random.sample(balotas_minimas0,5)
    balotas_minimas.append(balotas_minimas0)
    print(balotas_minimas)


for letras in letra[1]:
    for m in range(16, 31):
        mezcla_d = f"{letras}{m}"
        balotas.append(mezcla_d)
        balotas_minimas1.append(mezcla_d)
    balotas_minimas1 = random.sample(balotas_minimas1, 5)
    balotas_minimas.append(balotas_minimas1)
    print(balotas_minimas1)
#print(balotas)
for letras in letra[2]:
    for l in range(31, 46):
        mezcla_e = f"{letras}{l}"
        balotas.append(mezcla_e)
        balotas_minimas2.append(mezcla_e)
    balotas_minimas2 = random.sample(balotas_minimas2, 4)
    balotas_minimas.append(balotas_minimas2)
    print(balotas_minimas2)

for letras in letra[3]:
    for l in range(46,61):
        mezcla_f = f"{letras}{l}"
        balotas.append(mezcla_f)
        balotas_minimas3.append(mezcla_f)
    balotas_minimas3 = random.sample(balotas_minimas3, 5)
    balotas_minimas.append(balotas_minimas3)
    print(balotas_minimas3)
#print(balotas)
for letras in letra[4]:
    for l in range(61, 76):
        mezcla_g = f"{letras}{l}"
        balotas.append(mezcla_g)
        balotas_minimas4.append(mezcla_g)
    balotas_minimas4 = random.sample(balotas_minimas4, 5)
    balotas_minimas.append(balotas_minimas4)
    print(balotas_minimas4)
#print(balotas)
random.shuffle(balotas)
#print(balotas)
#print(f"estas son las balotas {random.shuffle(balotas)}")

#balotas_minimas = (random.choices(balotas))
#print(balotas_minimas)


#balotas_minimas = random.sample(balotas, 24)
#print(balotas_minimas)
print(balotas_minimas)
