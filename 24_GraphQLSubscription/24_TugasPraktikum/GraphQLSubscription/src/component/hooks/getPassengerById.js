import { useLazyQuery } from "@apollo/client";
import GetPassengerById from "../mutation/GetData";

const useGetPassengersById = () => {
    const { data: passengersData, loading: passengersLoading, error: passengersError } = useLazyQuery(GetPassengerById)
    return { passengersData, passengersLoading, passengersError }
}

export default useGetPassengersById