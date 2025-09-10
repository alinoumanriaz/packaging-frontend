import { gql } from "@apollo/client";

export const GET_ALL_INDUSTRY = gql`
  query {
    getAllIndustry {
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