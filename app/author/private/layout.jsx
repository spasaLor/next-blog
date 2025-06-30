import Navbar from "@/app/ui/author/authorNavbar";
import GreetingSelection from "@/app/ui/author/greeting";
import Footer from "@/app/ui/footer";
import styles from "@/app/author/private/private.module.css";

export default function PrivateLayout({children}){
    return(
        <>
            <Navbar/>
            <GreetingSelection/>
            <main className={styles.personal}>
                {children}
            </main>
            <Footer/>
        </>        
    );
}