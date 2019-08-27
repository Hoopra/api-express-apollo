import { gql } from 'apollo-server-express';

// The GraphQL schema
export const typeDefs = gql`
  type Query {
    movies: [Movie]
  }
  type Movie {
    title: String
    year: Int
    rating: Int
    scoutbase_rating: Float
    actors: [Person]
    directors: [Person]
  }
  type Person {
    name: String
    birthday: Int
    country: String
  }
  type User {
    username: String
    password: String
    token: String
  }

  type Mutation {
    # Login with user credentials
    createUser(username: String, password: String): User

    # Login with user credentials
    login(username: String, password: String): User
  }
`;
