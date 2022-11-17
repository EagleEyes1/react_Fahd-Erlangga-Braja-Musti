import { useMutation } from "@apollo/client";
import DeletePassenger from "../mutation/DeleteData";
import GetPassenger from "../mutation/GetData";

const useDeletePassenger = () => {
    const [deletePassenger, { loading: deleteLoading }] = useMutation(DeletePassenger, {
        refetchQueries: [GetPassenger]
    })

    return { deletePassenger, deleteLoading }
}

export default useDeletePassenger 