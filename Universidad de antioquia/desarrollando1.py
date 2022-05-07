animales_domesticos = set (["perro", "gato", "conejo"])
print(animales_domesticos, "de tipo" , type(animales_domesticos))

print(f"el conjunto tiene {len(animales_domesticos)} elementos")

animales_domesticos.__sub__("gatito")
print(animales_domesticos)