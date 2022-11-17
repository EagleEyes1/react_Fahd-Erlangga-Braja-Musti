import { gql } from "@apollo/client"

const GetPassengerById = gql`
  query MyQuery($id: Int) {
  passengers(where: {id: {_eq: $id}}) {
    nama
    umur
    jenis_kelamin
  }
}
`

export default GetPassengerById