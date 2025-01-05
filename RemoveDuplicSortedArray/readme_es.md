Dado un arreglo entero nums ordenado en orden no decreciente, elimine los duplicados en el lugar de modo que cada elemento único aparezca solo una vez. El orden relativo de los elementos debe mantenerse igual. Luego, devuelva la cantidad de elementos únicos en nums.

Considere que la cantidad de elementos únicos de nums es k; para que se acepte, debe hacer lo siguiente:

Cambie el arreglo nums de modo que los primeros k elementos de nums contengan los elementos únicos en el orden en que estaban presentes en nums inicialmente. Los elementos restantes de nums no son importantes, así como tampoco el tamaño de nums.
Devuelva k.

Ejemplo 1:

Entrada: nums = [1,1,2]
Salida: 2, nums = [1,2,_]
Explicación: Su función debe devolver k = 2, con los primeros dos elementos de nums siendo 1 y 2 respectivamente.
No importa lo que deje más allá de los k devueltos (por lo tanto, son guiones bajos).
Ejemplo 2:

Entrada: nums = [0,0,1,1,1,2,2,3,3,4]
Salida: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explicación: Su función debe devolver k = 5, con los primeros cinco elementos de nums siendo 0, 1, 2, 3 y 4 respectivamente.
No importa lo que deje más allá de los k devueltos (por lo tanto, son guiones bajos).

Restricciones:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
nums se ordena en orden no decreciente.