import { gql } from "@apollo/client"

const UpdatePassenger = gql`
mutation MyMutation($id: Int, $nama: String, $jenis_kelamin: String, $umur: Int) {
    update_passengers(where: {id: {_eq: $id}}, _set: {nama: $nama, jenis_kelamin: $jenis_kelamin, umur: $umur}) {
      returning {
        id
        nama
        jenis_kelamin
        umur
      }
    }
  }
`

export default UpdatePassenger
