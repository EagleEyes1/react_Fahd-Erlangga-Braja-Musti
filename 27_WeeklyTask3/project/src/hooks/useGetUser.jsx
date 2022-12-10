import { useQuery } from "@apollo/client";
import GetUser from "../graphqls/query/GetUser";

const useGetUser = () => {
    const { data: userData, loading: userLoading, error: userError } = useQuery(GetUser)
    return { userData, userLoading, userError }
}

export default useGetUser