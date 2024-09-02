/**
 * 'size' 길이만큼 그룹으로 분할된 요소 배열을 만듭니다. `배열`을 균등하게 분할할 수 없는 경우
 *  최종 청크는 나머지 요소가 됩니다.
 *
 * @param {Array} array 배열을 처리할 대상
 * @param {number} [size=1] 분할할 크기
 * @returns {Array} 새로운 배열을 반환
 * @example
 *
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */

export function chunk(
  array: any[] | null | undefined,
  size: number = 1
): any[][] {
  console.log("Input array:", array);
  console.log("Chunk size:", size);

  if (!Array.isArray(array)) {
    return [];
  }

  size = Math.max(size, 0);
  const length = array.length;
  if (length === 0 || size < 1) {
    return [];
  }

  let index = 0;
  const result = [];

  while (index < length) {
    console.log("Current index:", index);
    result.push(array.slice(index, index + size));
    index += size;
  }

  console.log("Result:", result);
  return result;
}
