Dado un arreglo entero nums y un entero val, elimine todas las ocurrencias de val en nums en el lugar. El orden de los elementos puede cambiarse. Luego, devuelva la cantidad de elementos en nums que no sean iguales a val.

Considere que la cantidad de elementos en nums que no sean iguales a val es k. Para que lo acepten, debe hacer lo siguiente:

Cambie el arreglo nums de modo que los primeros k elementos de nums contengan los elementos que no sean iguales a val. Los elementos restantes de nums no son importantes, así como el tamaño de nums.
Devuelva k.

Ejemplo 1:

Entrada: nums = [3,2,2,3], val = 3
Salida: 2, nums = [2,2,_,_]
Explicación: Tu función debe devolver k = 2, con los primeros dos elementos de nums siendo 2.
No importa lo que dejes más allá de los k devueltos (por lo tanto, son guiones bajos).

Ejemplo 2:

Entrada: nums = [0,1,2,2,3,0,4,2], val = 2
Salida: 5, nums = [0,1,4,0,3,_,_,_]
Explicación: Su función debe devolver k = 5, con los primeros cinco elementos de nums conteniendo 0, 0, 1, 3 y 4.
Tenga en cuenta que los cinco elementos se pueden devolver en cualquier orden.
No importa lo que deje más allá de los k devueltos (por lo tanto, son guiones bajos).

Restricciones:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100