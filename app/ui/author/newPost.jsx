'use client';
import { useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from "next/navigation";
import styles from "@/app/author/private/private.module.css";

export default function NewPost(props){
    const editorRef = useRef(null);
    const formRef = useRef(null);
    const nav = useRouter();
    const editing = !!props.postId;

    const savePost = async()=>{
        const content = editorRef.current.getContent();
        const formData= new FormData(formRef.current);
        const res = await fetch("/api/author/new_post",{method:"POST",headers:{
            authorization:'bearer '+localStorage.getItem('token'),
            "content-type":"application/json",
        },
            body: JSON.stringify({title:formData.get('title'),img:formData.get('img'),content})
        });
        if(res.ok)
            nav.push("/author/private/all_posts?refresh="+Date.now());
        else{
            const json=await res.json();
            console.log(json);
        }
    }

    const editPost = async()=>{
        const content = editorRef.current.getContent();
        const formData= new FormData(formRef.current);
        const res = await fetch("/api/author/edit_post",{
            method:"PUT",
            headers:{authorization:"bearer "+localStorage.getItem('token'), "content-type":"application/json"},
            body:JSON.stringify({postId:props.postId,title:formData.get('title'),content,img:formData.get('img')})
        });
        const json = await res.json();
        if(!res.ok)
            console.log(json.message);
        nav.push("/author/private/all_posts?refresh="+Date.now());
    }

    return(
        <>
            <div className={styles.newPost}>
                <form ref={formRef}>
                    <div className={styles["form-item"]}><label htmlFor='title'>Post title:</label><input type='text' name='title' id='title' defaultValue={editing ? props.title : ""} required/></div>
                    <div className={styles["form-item"]}><label htmlFor='img'>Header image:</label><input type='text' name='img' id='img' placeholder='http://...' defaultValue={editing ? props.img : ""} required/></div>
                </form>
            </div>
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
                initialValue={editing ? props.content : "<p>What are you writing about today?</p>"}
            />
            <button type="button" id={styles.sendPost} onClick={editing ? editPost : savePost}>{editing ? "Edit" : "Save"}</button>
        </>
    );
}