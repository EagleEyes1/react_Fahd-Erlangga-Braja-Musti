import { useMutation } from "@apollo/client";
import UpdatePassenger from "../mutation/UpdateData";
import GetPassenger from "../mutation/GetData";

const useUpdatePassenger = () => {
    const [updatePassenger] = useMutation(UpdatePassenger, {
        refetchQueries: [GetPassenger]
    })

    return { updatePassenger }
}

export default useUpdatePassenger