import { useState } from "react/cjs/react.development"

function ImageForm(props) {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');


    {/*copied from notes*/ }

    function handleSubmit(e) {
        e.preventDefault();
        props.addImage(e.target.text.value);
        setText('');
    }




    return (
        <form onSubmit={handleSubmit}>
            <input type="url" name="url-input" id="new-image-url" />
            <input type="text" name="caption-input" id="new-image-caption" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ImageForm;