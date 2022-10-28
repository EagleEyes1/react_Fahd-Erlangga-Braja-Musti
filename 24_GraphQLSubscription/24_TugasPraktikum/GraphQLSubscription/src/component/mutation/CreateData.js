import { gql } from "@apollo/client"

const CreatePassenger = gql`
    mutation MyMutation($jenis_kelamin: String, $nama: String, $umur: Int) {
    insert_passengers(objects: {jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur}) {
    returning {
      id
      nama
      jenis_kelamin
      umur
    }
  }
}
`

export default CreatePassenger