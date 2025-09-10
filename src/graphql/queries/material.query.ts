import { gql } from "@apollo/client";

export const GET_ALL_MATERIAL = gql`
  query {
    getAllMaterial {
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