import { useQuery } from "@apollo/client";
import GetPassenger from "../mutation/GetData";

const useGetPassengers = () => {
  const { data: passengersData, loading: passengersLoading, error: passengersError } = useQuery(GetPassenger)
  return { passengersData, passengersLoading, passengersError }
}

export default useGetPassengers