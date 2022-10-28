import ListItem from './ListItem';
import LoadingSvg from './Loadingsvg';
import useGetPassengers from './hooks/getPassenger';
import useDeletePassenger from './hooks/deletePassenger';

const ListPassenger = props => {
    const { passengersData, passengersLoading, passengersError } = useGetPassengers()
    const { deletePassenger, deleteLoading } = useDeletePassenger()

    if (passengersLoading || deleteLoading) {
        return <LoadingSvg />
    }

    if (passengersError) {
        console.log(passengersError)
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
                {passengersData?.passengers.map(item =>
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