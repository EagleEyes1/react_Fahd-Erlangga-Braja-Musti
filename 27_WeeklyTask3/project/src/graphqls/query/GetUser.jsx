import { gql } from "@apollo/client"

const GetUser = gql`
query QueryGetUser {
    user {
      id
      description
      avatar
      createdAt
    }
  }
  `
export default GetUser