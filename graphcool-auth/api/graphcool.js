import { gql } from 'react-apollo';

export const ALL_LIFTS_QUERY = gql`
  query allLiftsQuery {
    allLifts(orderBy: createdAt_DESC) {
      id
      createdAt
      movement
      units
      weight
    }
  }
`;

export const CREATE_LIFT_MUTATION = gql`
  mutation($movement: String!, $units: String!, $weight: Float!) {
    createLift(movement: $movement, units: $units, weight: $weight) {
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

export const UPDATE_LIFT_MUTATION = gql`
  mutation($id: ID!, $movement: String!, $units: String!, $weight: Float!) {
    updateLift(id: $id, movement: $movement, units: $units, weight: $weight) {
      id
    }
  }
`;
