/**
 * Function that return native random UUID v4
 * See {@link https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID}
 *
 * previously generated by https://www.npmjs.com/package/uuid
 */
export function randomUUIDv4(): string {
  return crypto.randomUUID();
}
