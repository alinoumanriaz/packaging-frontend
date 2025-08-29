import { gql } from "@apollo/client";

export const GET_MENU_LIST = gql`
  query {
    getAllIndustry {
      imageUrl
      name
      slug
    }
    getAllMaterial {
      imageUrl
      name
      slug
    }
    getAllStyle {
      imageUrl
      name
      slug
    }
  }
`;
