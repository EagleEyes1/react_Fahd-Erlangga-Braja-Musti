import { useSubscription } from "@apollo/client";
import SubscriptionPassenger from "../mutation/SubscriptionData";

const useSubcriptionPassenger = () => {
    const { data: subscriptionData, loading: subscriptionLoading, error: subscriptionError } = useSubscription(SubscriptionPassenger)
    console.log(subscriptionData)
    return { subscriptionData, subscriptionLoading, subscriptionError }
}

export default useSubcriptionPassenger