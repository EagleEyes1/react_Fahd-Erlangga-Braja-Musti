import styles from "../../assets/styles/Home.module.css"
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    return (
        <>
            <div className={styles.not_found}>
                <div>
                    <img src={require("../../assets/img/box.jpg")} alt="box" />
                </div><br />
                <div style={{ fontWeight: "bolder", fontSize: "35px", paddingBottom: "80px" }}>
                    Oops! Something went wrong!
                </div>
                <button className={styles.tombol_not_found} onClick={goHome}>
                    RETURN TO HOME
                </button>

            </div>
        </>
    )
}

export default NotFound