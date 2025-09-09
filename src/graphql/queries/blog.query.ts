import { gql } from "@apollo/client";

export const GET_PAGINATED_BLOG = gql`
  query GetPaginatedBlogs(
    $page: Int!
    $limit: Int!
    $search: String
    $status: String
  ) {
    getPaginatedBlogs(
      page: $page
      limit: $limit
      search: $search
      status: $status
    ) {
      blogs {
        _id
        title
        imageUrl
        slug
        excerpt
        content
        status
        author {
          _id
          username
          imageUrl
        }
        tags
        isFeatured
        createdAt
        updatedAt
      }
      totalBlogs
    }
  }
`;