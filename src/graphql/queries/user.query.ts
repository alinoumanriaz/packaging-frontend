import { gql } from "@apollo/client";

export const USER_REGISTER = gql`
  mutation RegisterUser($input: UserRegisterInput!) {
    registerUser(input: $input) {
      token
      user {
        _id
        username
        email
        role
        isVerified
        userImage
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    getCurrentUser {
      token
      user {
        _id
        username
        role
        isVerified
        imageUrl
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation LoginUser($input: UserLoginInput!) {
    loginUser(input: $input) {
      token
      user {
        _id
        username
        role
        isVerified
        imageUrl
      }
    }
  }
`;
