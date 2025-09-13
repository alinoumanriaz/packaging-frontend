import { gql } from "@apollo/client";

export const GET_PAGINATED_PRODUCT = gql`
  query GetCurrentProducts {
    getCurrentProducts {
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

export const GET_PAGINATED_PRODUCT_WITH_SEARCH = gql`
  query GetPaginatedProducts($page: Int!, $limit: Int!, $search: String) {
    getPaginatedProducts(page: $page, limit: $limit, search: $search) {
      products {
        _id
        name
        slug
        imageUrl
      }
      totalProducts
    }
  }
`;
