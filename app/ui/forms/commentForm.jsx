'use client';
import useFetchMe from "@/app/hooks/useFetchMe";
import Link from "next/link";
import { useRef } from "react";
import SubmitButton from "./submitButton";
import styles from "@/app/ui/post/post.module.css";
import dynamic from 'next/dynamic';
import { redirect } from "next/navigation";

const Editor = dynamic(
  () => import('@tinymce/tinymce-react').then(mod => mod.Editor),
  { ssr: false }
);

export default function Form({postId}){
    const editorRef=useRef();
    const role = useFetchMe();
    console.log(role);
    const handleSumbit = async(e)=>{
        e.preventDefault();
        const comment = editorRef.current.getContent();
        const res=await fetch("/api/posts/"+postId+"/new_comment",
            {
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    Authorization:"bearer "+localStorage.getItem('token'),
                },
                body:JSON.stringify({comment})
            }
        );
        if(res.ok){
            redirect('/blog/post/'+postId);
        }            
    }
    return(
        role === 'visitor' ? (<p id={styles["commentWarning"]}><Link href="/login">Log In</Link> to leave a comment</p>) :
            (<form className={styles["commentForm"]} onSubmit={handleSumbit}>
                <Editor
                    apiKey='puf70dx3rttzxi7kdg0imgeoppwcifpgjfkp38uv1ssmx8x4'
                    onInit={ (_evt, editor) => editorRef.current = editor }
                    init={{
                        plugins: [
                        'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
                        ],
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                    }}
                    initialValue="<p>Leave a comment...</p>"
                    
                    />
                <SubmitButton text={"Send"}/>
            </form>)
    )              
                
}