import Link from "next/link";

export default function NotFound(){
    return(
        <>
            <div className="notfound-container">
                <h2>404</h2>
                <p>This page doesn't exist</p>
                <Link href="/blog">Go back to the homepage</Link>
            </div>
        </>
    );
}