import { randomInRange } from '@util';

export const movies = (root: any, parameters: any, context: any) => { 
  return [{
    title: 'Kill Bill',
    year: 2003,
    rating: 5,
    actors: [
      { name: 'Uma Thurman', birthday: 10022400, country: 'United States' },
      { name: 'Lucy Liu', birthday: -34128000, country: 'United States' },
      { name: 'Daryl Hannah', birthday: -286502400, country: 'United States' },
      { name: 'Vivica A. Fox', birthday: -171158400, country: 'United States' },
    ],
    directors: [
      { name: 'Quentin Tarantino', birthday: -213580800, country: 'United States' },
    ],
    scoutbase_rating: (context.authenticated) ? randomInRange(5, 9) : null,
  }];
};
