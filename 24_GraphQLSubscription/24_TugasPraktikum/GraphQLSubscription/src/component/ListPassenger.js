import ListItem from './ListItem';
import LoadingSvg from './Loadingsvg';
import useSubcriptionPassenger from './hooks/useSubscriptionPassenger';
import useDeletePassenger from './hooks/deletePassenger';

const ListPassenger = props => {
    const { subscriptionData, subscriptionLoading, subscriptionError } = useSubcriptionPassenger()
    const { deletePassenger, deleteLoading } = useDeletePassenger()

    if (subscriptionLoading || deleteLoading) {
        return <LoadingSvg />
    }

    if (subscriptionError) {
        console.log(subscriptionError)
        return null
    }

    const deleteData = (idx) => {

        deletePassenger({
            variables: {
                id: idx,
            }

        })

    }

    return (
        <div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {subscriptionData?.passengers.map(item =>
                (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={deleteData}
                    />
                ))}
            </table>
        </div >
    )
}

export default ListPassenger;