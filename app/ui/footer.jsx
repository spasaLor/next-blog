import {Github, Linkedin} from 'lucide-react';
import styles from './navbar.module.css';

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles["footer-content"]}>
                <p>Made with Love by Lorenzo</p>
                <div>
                    <a href="https://github.com/spasaLor" rel='noopener noreferrer' target='_blank'><Github strokeWidth={1.5}/></a>
                    <a href="https://www.linkedin.com/in/lorenzo-spadaro-0a5955337/" rel='noopener noreferrer' target='_blank'><Linkedin strokeWidth={1.5}/></a>
                </div>
               </div>
        </footer>
    )
}