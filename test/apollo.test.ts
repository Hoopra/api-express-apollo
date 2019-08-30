import 'jest';
import { movies } from 'src/apollo/queries';

describe('apollo', () => {
  describe('queries', () => {
    describe('movies', () => {
      it('should return an array with the movie Kill Bill', async () => {
        const movie = movies({}, {}, {})[0];
        expect(movie).toBeTruthy();
        expect(movie.title).toEqual('Kill Bill');
        expect(movie.directors.length).toEqual(1);
      });
    });
  });
});
