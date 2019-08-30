import 'jest';
import { randomInRange } from 'src/util';

describe('util', () => {
  describe('randomInRange', () => {
    it('should return a random number between 5 and 9 every time', async () => {
      for (let i = 0; i < 100; i++) {
        const rand = randomInRange(5, 9);
        expect(rand >= 5.0 && rand <= 9.0).toBeTruthy();
      }
    });
  });
});
