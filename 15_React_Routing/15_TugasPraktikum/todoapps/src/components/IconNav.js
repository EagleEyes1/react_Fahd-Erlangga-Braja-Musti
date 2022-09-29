import { useState } from "react";
import { useNavigate, redirect } from "react-router-dom"
import styles from "./Home.module.css";

const IconNav = () => {
    const [kondisi, setKondisi] = useState(false)

    const handleBukaNavbar = () => {
        setKondisi(true)
    }
    const handleTutupNavbar = () => {
        setKondisi(false)
    }
    const navigate = useNavigate();
    const action = () => {
        navigate("/about/about-app")
    }
    const self = () => {
        return redirect("/");
    }

    let viewMode = {};
    let openMode = {};

    if (kondisi) {
        viewMode.display = 'none';
    } else {
        openMode.display = 'none';
    }

    return (
        <>
            <div className={styles.icon}>
                <a onClick={handleBukaNavbar} style={viewMode}>
                    <img src="https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png" alt="Nav" />
                </a>
            </div>
            <div className={styles.icon2} style={openMode}>
                <nav>
                    <ul className={styles.list}>
                        <li>
                            <img onClick={handleTutupNavbar} src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="close" />
                        </li>
                        <li>
                            <a onClick={self} href="">Home</a>
                        </li>
                        <li>
                            <a onClick={action} href="">About</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </>

    )

}

export default IconNav
