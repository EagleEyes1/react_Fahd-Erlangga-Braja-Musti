import styles from "./Home.module.css";
import { useNavigate, redirect } from "react-router-dom"

const AboutPage = () => {
    const navigate = useNavigate();
    const action = () => {
        navigate("/about/about-author")
    }
    const goHome = () => {
        navigate("/")
    }
    const self = () => {
        redirect("/about/about-app")
    }
    return (
        <>
            <div className={styles.content_about}>
                <div className={styles.nav_about}>
                    <nav>
                        <ul className={styles.list_about}>
                            <li>
                                <a className={styles.hover} onClick={goHome} href="">Home</a>
                            </li>
                            <li>
                                <a onClick={self} className={styles.aktif} href="">About App</a>
                            </li>
                            <li>
                                <a className={styles.hover} onClick={action} href="">About Author</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.deskripsi_about}>
                    <div className={styles.about_title}>
                        About the App
                    </div>
                    <div>
                        In this app, you can add, delete, submit, and edit items. To edit items, simply double click on it. Once you are done,
                        press enter key to resubmit. This app will persist your data in the browser local storage. So whether you reload, close
                        your app or reopened it, you still have access to your to-dos items.
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutPage