import "./Home.css";
import useUpdatePassenger from "../component/hooks/updatePassenger"
import React, { useState } from "react";

const base = {
    nama: "",
    jenis_kelamin: "",
    umur: "",
};

const ListItem = (props) => {
    const { id, nama, umur, jenis_kelamin } = props.data;
    const { updatePassenger } = useUpdatePassenger();

    const [editMode, setEditMode] = useState(false);

    const [newPassenger, setNewPassenger] = useState(base);



    const handleInput = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value)

        setNewPassenger({
            ...newPassenger,
            [name]: value,
        });
    };


    const updateList = () => {
        updatePassenger({
            variables: {
                id: id,
                nama: newPassenger.nama,
                umur: newPassenger.umur,
                jenis_kelamin: newPassenger.jenis_kelamin,
            },
        });

    };

    return (
        <tbody>
            <tr>
                <td>
                    {editMode ? (
                        <form onSubmit={updateList}>
                            <input name="nama" onChange={handleInput} placeholder={nama} />
                        </form>
                    ) : (
                        nama
                    )}
                </td>
                <td>
                    {editMode ? (
                        <form onSubmit={updateList}>
                            <input name="umur" onChange={handleInput} placeholder={umur} />
                        </form>
                    ) : (
                        umur
                    )}
                </td>
                <td>
                    {editMode ? (
                        <form onSubmit={updateList}>
                            <input name="jenis_kelamin" onChange={handleInput} placeholder={jenis_kelamin} />
                        </form>
                    ) : (
                        jenis_kelamin
                    )}
                </td>
                <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
                    <button>Hapus</button>
                </td>
                <td className="removeBorder" onClick={() => setEditMode(!editMode)}>
                    {editMode ? (
                        <form onClick={updateList}>
                            <button type="button">Done</button>
                        </form>
                    ) : (
                        <button>Edit</button>
                    )}
                </td>
            </tr>
        </tbody >
    );
};

export default ListItem;
