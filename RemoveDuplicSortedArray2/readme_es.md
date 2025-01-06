Dado un arreglo entero nums ordenado en orden no decreciente, elimine algunos duplicados en el lugar de modo que cada elemento único aparezca como máximo dos veces. El orden relativo de los elementos debe mantenerse igual.

Dado que es imposible cambiar la longitud del arreglo en algunos lenguajes, debe colocar el resultado en la primera parte del arreglo nums. Más formalmente, si hay k elementos después de eliminar los duplicados, entonces los primeros k elementos de nums deben contener el resultado final. No importa lo que deje más allá de los primeros k elementos.

Devuelva k después de colocar el resultado final en los primeros k espacios de nums.

No asigne espacio adicional para otro arreglo. Debe hacer esto modificando el arreglo de entrada en el lugar con O(1) memoria adicional.

Ejemplo 1:

Entrada: nums = [1,1,1,2,2,3]
Salida: 5, nums = [1,1,2,2,3,_]
Explicación: Tu función debe devolver k = 5, con los primeros cinco elementos de nums siendo 1, 1, 2, 2 y 3 respectivamente.
No importa lo que dejes más allá de la k devuelta (por lo tanto, son guiones bajos).

Ejemplo 2:

Entrada: nums = [0,0,1,1,1,1,2,ñ3,3]
Salida: 7, nums = [0,0,1,1,2,3,3,_,_]
Explicación: Su función debe devolver k = 7, con los primeros siete elementos de nums siendo 0, 0, 1, 1, 2, 3 y 3 respectivamente.
No importa lo que deje más allá del k devuelto (por lo tanto, son guiones bajos).

Restricciones:

1 <= nums.length <= 3 * 104
-104 <= nums[i] <= 104
nums se ordena en orden no decreciente.