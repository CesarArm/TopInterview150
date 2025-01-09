Dado un arreglo de números enteros nums, gire el arreglo hacia la derecha en k pasos, donde k no es negativo.

Ejemplo 1:

Entrada: nums = [1,2,3,4,5,6,7], k = 3
Salida: [5,6,7,1,2,3,4]
Explicación:
rotar 1 paso a la derecha: [7,1,2,3,4,5,6]
rotar 2 pasos a la derecha: [6,7,1,2,3,4,5]
rotar 3 pasos a la derecha: [5,6,7,1,2,3,4]

Ejemplo 2:

Entrada: nums = [-1,-100,3,99], k = 2
Salida: [3,99,-1,-100]
Explicación:
rotar 1 paso a la derecha: [99,-1,-100,3]
rotar 2 pasos a la derecha: [3,99,-1,-100]

Restricciones:

1 <= nums.length <= 10^5
-231 <= nums[i] <= 231 - 1
0 <= k <= 10^5