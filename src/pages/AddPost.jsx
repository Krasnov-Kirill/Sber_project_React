import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api";
// import { UserCtx } from "../../context/UserContext";

export default () => {

    const navigation = useNavigate();
    const st = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    }
    
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [image, setImage] = useState("");

    function submitForm(event) {
        event.preventDefault();
        api.addPost(title, text, image).then(data => {
            navigation("/");
            document.location.reload();
        });
    }

    function editTitle(event) {
        setTitle(event.target.value);
    }
    
    function editText(event) {
        setText(event.target.value);
    }

    function editImage(event) {
        setImage(event.target.value);
    }

    return (
        // <div style={st}>
            <div className="addpostForm">
                <form className="auth" onSubmit={ submitForm }>
                    <input type="text" placeholder="Title" name="title" required onInput={ editTitle } />
                    <input type="text" placeholder="Text" name="text" required onInput={ editText } />
                    <input type="text" placeholder="Img" name="image" required onInput={ editImage } />
                    {/* <input type="text" placeholder="tags" name="tags" required onInput="tags"/> */}
                    <button type="submit">Отправить пост</button>
                </form>
            </div>
        // </div>
    )
}