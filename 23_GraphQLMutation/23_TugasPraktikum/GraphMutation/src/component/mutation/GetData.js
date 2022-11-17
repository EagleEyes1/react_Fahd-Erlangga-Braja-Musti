import { gql } from "@apollo/client"

const GetPassenger = gql`
  query MyQuery {
  passengers {
    id
    nama
    umur
    jenis_kelamin
  }
}
`

export default GetPassenger