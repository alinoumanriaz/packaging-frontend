import { gql } from '@apollo/client';

export const GET_ALL_REVIEWS = gql`
  query GetAllReviews($page: Int!, $limit: Int!, $search: String) {
    getAllReviews(page: $page, limit: $limit, search: $search) {
      totalReviews
      reviews {
        _id
        customerName
        slug
        imageUrl
        content
        createdAt
      }
    }
  }
`;