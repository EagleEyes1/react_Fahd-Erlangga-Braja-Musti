import styles from "./Home.module.css";
import { useNavigate, redirect } from "react-router-dom"


const AboutAuthor = () => {
    const navigate = useNavigate()
    const goHome = () => {
        navigate("/")
    }
    const goAbout = () => {
        navigate("/about/about-app")
    }
    const self = () => {
        redirect("/about/about-author")
    }
    return (
        <>
            <div className={styles.content_author}>
                <div className={styles.nav_author}>
                    <nav>
                        <ul className={styles.list_author}>
                            <li>
                                <a className={styles.hover} onClick={goHome} href="">Home</a>
                            </li>
                            <li>
                                <a className={styles.hover} onClick={goAbout} href="">About App</a>
                            </li>
                            <li>
                                <a onClick={self} className={styles.link_author} href="" >About Author</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.deskripsi_author}>
                    <div className={styles.author_title}>
                        About the Author
                    </div>
                    <div>
                        This app was developed by someone, a self-taught web developer and technical writer.
                    </div>
                </div>
            </div>
        </>
    )
}
export default AboutAuthor