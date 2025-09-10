import { gql } from "@apollo/client";

export const GET_ALL_STYLE = gql`
  query {
    getAllStyle {
      _id
      name
      slug
      iconImageUrl
      imageUrl
      bannerImage
      description
      content
      createdAt
      updatedAt
    }
  }
`;