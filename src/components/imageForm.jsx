import { useState } from "react/cjs/react.development"

function ImageForm(props) {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');


    {/*copied from notes*/ }


    function handleSubmit(e) {
        e.preventDefault();
        props.addImage(url, text);
        console.log({ url })
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
            <h2>Add an image url and caption</h2>
            <input value={url} onChange={handleUrlChange} type="url" name="url-input" id="new-image-url" placeholder='Image URL' />
            <input value={text} onChange={handleTextChange} type="text" name="caption-input" id="new-image-caption" placeholder='Image Caption' />
            <button type="submit">Submit</button>
        </form>
    )
}
export default ImageForm;