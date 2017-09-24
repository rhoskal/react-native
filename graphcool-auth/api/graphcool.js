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
  mutation createLiftMutation($movement: String!, $units: String!, $weight: Float!) {
    createLift(movement: $movement, units: $units, weight: $weight) {
      id
    }
  }
`;

export const DELETE_LIFT_MUTATION = gql`
  mutation deleteLiftMutation($id: ID!) {
    deleteLift(id: $id) {
      id
    }
  }
`;

export const UPDATE_LIFT_MUTATION = gql`
  mutation updateLiftMutation($id: ID!, $movement: String!, $units: String!, $weight: Float!) {
    updateLift(id: $id, movement: $movement, units: $units, weight: $weight) {
      id
    }
  }
`;

export const FACEBOOK_LOGIN_MUTATION = gql`
  mutation facebookLoginMutation($facebookToken: String!) {
    authenticateFacebookUser(facebookToken: $facebookToken) {
      token
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation updateUserMutation($id: ID!, $firstName: String!, $lastName: String!, $gender: String!) {
    updateUser(id: $id, firstName: $firstName, lastName: $lastName, gender: $gender) {
      id
      firstName
      lastName
      gender
    }
  }
`;

export const CURRENT_USER_QUERY = gql`
  {
    user {
      id
      firstName
      lastName
      gender
    }
  }
`;
