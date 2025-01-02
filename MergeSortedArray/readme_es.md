Se le proporcionan dos matrices de números enteros nums1 y nums2, ordenadas en orden no decreciente, y dos números enteros m y n, que representan la cantidad de elementos en nums1 y nums2 respectivamente.

Combine nums1 y nums2 en una única matriz ordenada en orden no decreciente.

La función no debe devolver la matriz ordenada final, sino que debe almacenarse dentro de la matriz nums1. Para adaptarse a esto, nums1 tiene una longitud de m + n, donde los primeros m elementos indican los elementos que se deben combinar y los últimos n elementos se establecen en 0 y se deben ignorar. nums2 tiene una longitud de n.

Ejemplo 1:

Entrada: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Salida: [1,2,2,3,5,6]
Explicación: Las matrices que estamos fusionando son [1,2,3] y [2,5,6].
El resultado de la fusión es [1,2,2,3,5,6] con los elementos subrayados provenientes de nums1.

Ejemplo 2:

Entrada: nums1 = [1], m = 1, nums2 = [], n = 0
Salida: [1]
Explicación: Las matrices que estamos fusionando son [1] y [].
El resultado de la fusión es [1].

Ejemplo 3:

Entrada: nums1 = [0], m = 0, nums2 = [1], n = 1
Salida: [1]
Explicación: Las matrices que estamos fusionando son [] y [1].
El resultado de la fusión es [1].
Tenga en cuenta que, como m = 0, no hay elementos en nums1. El 0 solo está ahí para garantizar que el resultado de la fusión pueda caber en nums1.

Restricciones:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109