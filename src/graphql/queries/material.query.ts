import { gql } from "@apollo/client";

export const GET_ALL_MATERIAL = gql`
  query {
    getAllMaterial {
      _id
      name
      slug
      iconName
      imageUrl
      bannerImage
      description
      createdAt
      updatedAt
    }
  }
`;