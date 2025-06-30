import { useFormStatus } from "react-dom";

export default function SubmitButton({text}){
    const {pending}=useFormStatus();
    return(
        <button type="submit" disabled={pending}>{text}</button>
    );
}