import { gql } from "@apollo/client";

export const GET_PAGE_CONTENT = gql`
  query GetPageContent($slug: String!) {
    getPageContent(slug: $slug) {
      success
      message
      data {
        _id
        slug
        content
        author {
          _id
          username
          email
        }
        createdAt
        updatedAt
      }
    }
  }
`;