export interface Person {
    name: string;
    country: string;
    birthday: number;
}

export interface Movie {
    title: string;
    year: number;
    rating: number;
    scoutbase_rating: number;
    actors: Person[];
    directors: Person[];
}
