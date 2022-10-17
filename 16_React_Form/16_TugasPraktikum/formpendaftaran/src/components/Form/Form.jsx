import React, { useState, useRef } from 'react'
import styles from "./Form.module.css"

const Form = () => {
    const dataKosong = {
        nama: "",
        email: "",
        handphone: "",
        latar: "",
        kelas: "",
        foto: "",
        harapan: ""
    }
    const errorKosong = {
        errNama: "",
        errEmail: "",
        errHandphone: ""
    }

    const [data, setData] = useState(dataKosong)
    const [errMsg, setErrMsg] = useState(errorKosong)
    const nameRegex = /^[A-Za-z ]*$/;
    const emailRegex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/g;
    const fotoSurat = useRef(null)

    const handleInputNama = e => {
        const name = e.target.name;
        const value = e.target.value;

        if (name === "nama") {
            if (nameRegex.test(value)) {
                setErrMsg({
                    ...errMsg,
                    errNama: ""
                })
            } else {
                setErrMsg({
                    ...errMsg,
                    errNama: "Nama Lengkap Harus Berupa Huruf"
                })
            }
        }

        setData({
            ...data,
            [name]: value
        })
    }
    const handleInputEmail = e => {
        const email = e.target.name;
        const value = e.target.value;

        if (email === "email") {
            if (emailRegex.test(value)) {
                setErrMsg({
                    ...errMsg,
                    errEmail: ""
                })
            } else {
                setErrMsg({
                    ...errMsg,
                    errEmail: "Email Tidak Sesuai"
                })
            }
        }

        setData({
            ...data,
            [email]: value
        })
    }

    const handleInputHandphone = e => {
        const handphone = e.target.name;
        const value = e.target.value;

        if (handphone === "handphone") {
            if (value.length >= 9 && value.length <= 14) {
                setErrMsg({
                    ...errMsg,
                    errHandphone: ""
                })
            }
            else if (value.length > 14) {
                setErrMsg({
                    ...errMsg,
                    errHandphone: "No Handphone Terlalu Panjang"
                })
            }
            else {
                setErrMsg({
                    ...errMsg,
                    errHandphone: "No Handphone Terlalu Pendek"
                })
            }
        }

        setData({
            ...data,
            [handphone]: value
        })
    }
    const handleInput = (e) => {
        const nameInput = e.target.name;
        const value = e.target.value;

        setData({
            ...data,
            [nameInput]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (errMsg.errNama !== "" || errMsg.errEmail !== "" || errMsg.errHandphone !== "") {
            alert("Data Pendaftar Tidak Sesuai")
        } else {
            alert(`Data Pendaftar "${data.nama}" Berhasil Diterima`)
            resetData()
        }
    }

    const resetData = () => {
        setData(dataKosong);
        setErrMsg(errorKosong);
    }

    return (
        <>
            <div className={styles.form}>
                <div>
                    <h2>Pendaftaran Peserta Coding Bootcamp</h2>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.padding}>
                            <label>
                                Nama Lengkap:
                            </label><br />
                            <input
                                className={styles.full_layar}
                                type="text"
                                value={data.nama}
                                onChange={handleInputNama}
                                name='nama'
                                required /><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                Email:
                            </label><br />
                            <input
                                className={styles.full_layar}
                                type="email"
                                name='email'
                                value={data.email}
                                onChange={handleInputEmail}
                                required /><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                No Handphone:
                            </label><br />
                            <input
                                className={styles.full_layar}
                                type="number"
                                name='handphone'
                                value={data.handphone}
                                onChange={handleInputHandphone}
                                required /><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                Latar Belakang Pendidikan:
                            </label><br />
                            <input
                                type="radio"
                                name='latar'
                                value={data.latar}
                                onChange={handleInput}
                                required />
                            <label>IT</label>
                            <input
                                type="radio"
                                name='latar'
                                value={data.latar}
                                onChange={handleInput}
                            />
                            <label>Non IT</label><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                Kelas Coding Yang Dipilih:
                            </label><br />
                            <select className={styles.full_checkbox} onChange={handleInput} value={data.kelas} name="kelas" required>
                                <option selected>Pilih Salah Satu Program</option>
                                <option value="Coding Backend with Golang">Coding Backend with Golang</option>
                                <option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
                                <option value="Fullstack Developer">Fullstack Developer</option>
                            </select><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                Foto Surat Kesungguhan:
                            </label><br />
                            <input
                                type="file"
                                name='foto'
                                refs={fotoSurat}
                                required /><br />
                        </div>
                        <div className={styles.padding}>
                            <label>
                                Harapan Untuk Coding Bootcamp ini:
                            </label><br />
                            <textarea className={styles.full_text}
                                name="harapan"
                                value={data.harapan}
                                onChange={handleInput}
                            />
                        </div>
                        <span className={styles.error}>{errMsg.errNama}</span>
                        <span className={styles.error}>{errMsg.errEmail}</span>
                        <span className={styles.error}>{errMsg.errHandphone}</span>
                        <div className={styles.button}>
                            <button type='submit' required>Submit</button>
                            <button className={styles.reset} type='submit' onClick={resetData}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Form