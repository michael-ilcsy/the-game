/**
 * startからendまでの数値配列を作成します
 * @param start
 * @param end
 */
export const range = (start: number, end: number) => Array.from({length: (end - start + 1)}, (v, k) => k + start)

/**
 * 配列をシャッフルします
 * @param array
 */
export const shuffle = <T>(array: T[]) => {
  const out = Array.from(array);
  for (let i = out.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [out[i], out[r]] = [out[r], out[i]]
  }
  return out;
}
