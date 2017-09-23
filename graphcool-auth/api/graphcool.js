import { gql } from 'react-apollo';

export const ALL_LIFTS_QUERY = gql`
  query allLiftsQuery {
    allLifts(orderBy: createdAt_DESC) {
      id
      createdAt
      movement
      weight
    }
  }
`;

export const CREATE_LIFT_MUTATION = gql`
  mutation($movement: String!, $weight: Float!) {
    createLift(movement: $movement, weight: $weight) {
      id
    }
  }
`;

export const DELETE_LIFT_MUTATION = gql`
  mutation($id: ID!) {
    deleteLift(id: $id) {
      id
    }
  }
`;
