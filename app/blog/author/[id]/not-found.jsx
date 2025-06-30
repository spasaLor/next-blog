import Link from "next/link";

export default function NotFound(){
    return(
        <>
            <div className="notfound-container">
                <h2>Not Found</h2>
                <p>The author you're looking for doesn't exist</p>
                <Link href="/blog">Go back to the homepage</Link>
            </div>
        </>
    );
}