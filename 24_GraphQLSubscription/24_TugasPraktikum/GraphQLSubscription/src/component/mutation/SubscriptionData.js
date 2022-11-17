import { gql } from "@apollo/client"

const SubscriptionPassenger = gql`
subscription MySubscription {
  passengers {
    id
    jenis_kelamin
    nama
    umur
  }
}
`

export default SubscriptionPassenger