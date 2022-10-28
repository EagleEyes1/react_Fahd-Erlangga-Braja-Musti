import { useMutation } from "@apollo/client";
import CreatePassenger from "../mutation/CreateData";
import GetPassenger from "../mutation/GetData";

const useCreateNewData = () => {
    const [createNewPassenger, { loading: createLoading }] = useMutation(CreatePassenger, {
        refetchQueries: [{ query: GetPassenger }]
    })

    return { createNewPassenger, createLoading }
}

export default useCreateNewData