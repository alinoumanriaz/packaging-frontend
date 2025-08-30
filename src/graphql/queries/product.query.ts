import { gql } from "@apollo/client";

export const GET_PAGINATED_PRODUCT = gql`
  query GetCurrentProducts() {
    getCurrentProducts() {
      products {
        _id
        name
        slug
        h1Tag
        metaTitle
        metaDescription
        shortDescription
        description
        specification
        tags
        imageUrl
        createdAt
        updatedAt
      }
      totalProducts
    }
  }
`;