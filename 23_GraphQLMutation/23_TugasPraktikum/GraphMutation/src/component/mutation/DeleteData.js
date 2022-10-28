import { gql } from "@apollo/client"

const DeletePassenger = gql`
mutation MyMutation($id: Int!) {
    delete_passengers_by_pk(id: $id) {
      id
      nama
      jenis_kelamin
      umur
    }
  }
`

export default DeletePassenger