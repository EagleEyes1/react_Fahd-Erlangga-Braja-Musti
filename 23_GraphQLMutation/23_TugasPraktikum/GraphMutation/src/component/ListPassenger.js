import ListItem from './ListItem';
import { gql, useQuery, useLazyQuery } from "@apollo/client"
import LoadingSvg from './Loadingsvg';
import { useState } from 'react';

const GetPassenger = gql`
  query MyQuery {
  passengers {
    nama
    umur
    jenis_kelamin
  }
}
`

const GetPassengerById = gql`
  query MyQuery($id: Int) {
  passengers(where: {id: {_eq: $id}}) {
    nama
    umur
    jenis_kelamin
  }
}
`


const ListPassenger = props => {
    const [getPassenger, { data, loading, error }] = useLazyQuery(GetPassengerById)
    const [userId, setUserId] = useState(0);

    if (loading) {
        return <LoadingSvg />
    }

    if (error) {
        console.log(error)
        return null
    }

    const onGetPassenger = () => {
        getPassenger({
            variables: {
                id: userId,
            }
        });
    }

    const onChangeUserId = (e) => {
        if (e.target) {
            setUserId(e.target.value)
        }
    }

    return (
        <div>
            <div style={{ paddingBottom: "10px" }}>
                <input value={userId} onChange={onChangeUserId} />
                <button onClick={onGetPassenger}>Get Data</button>
            </div>
            <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
                <thead bgcolor="red">
                    <td>Nama</td>
                    <td>Umur</td>
                    <td>Jenis Kelamin</td>
                    <td bgcolor="white" className="removeBorder"></td>
                </thead>
                {data?.passengers.map(item => (
                    <ListItem
                        key={item.id}
                        data={item}
                        hapusPengunjung={props.hapusPengunjung}
                    />
                ))}
            </table>
        </div >
    )
}

export default ListPassenger;