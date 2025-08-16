import { gql } from "@apollo/client";

export const GET_ALL_INDUSTRY = gql`
  query {
    getAllIndustry {
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