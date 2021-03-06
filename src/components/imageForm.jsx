import { useState } from "react"

function ImageForm(props) {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');


    {/*copied from notes*/ }


    function handleSubmit(e) {
        e.preventDefault();
        props.addImage(url, text);
        setText('')
        setUrl('');

    }

    function handleTextChange(e) {
        setText(e.target.value);
    }

    function handleUrlChange(e) {
        setUrl(e.target.value)
    }


    return (
        <form onSubmit={handleSubmit} >
            <input value={url} onChange={handleUrlChange} type="url" name="url-input" id="new-image-url" placeholder='Image URL' />
            <input value={text} onChange={handleTextChange} type="text" name="caption-input" id="new-image-caption" placeholder='Image Caption' />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ImageForm;