import { gql } from 'react-apollo';

export const ALL_BOOKS_QUERY = gql`
  query allBooks {
    allBooks {
      id
      rating
      author
      image
      description
      title
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation createBook($title: String!, $author: String, $description: String, $rating: Int, $image: String) {
    createBook(title: $title, author: $author, description: $description, rating: $rating, image: $image) {
      createdAt
    }
  }
`;

export const BOOKS_SUBSCRIPTION = gql`
  subscription {
    Book(filter: { mutation_in: [CREATED] }) {
      node {
        id
        rating
        author
        image
        description
        title
      }
    }
  }
`;
