import { randomUUIDv4 } from './uuid.helper';

describe('randomUUIDv4', () => {
  it('should return a valid UUID', () => {
    const regex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(regex.test(randomUUIDv4())).toBeTruthy();
  });
});
