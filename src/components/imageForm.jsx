import { useState } from "react/cjs/react.development"

function imageForm(props) {
    const [text, setText] = useState('');
    const [url, setUrl] = useState('');




    return (
        <form>
            <input type="url" name="url-input" id="new-image-url" />
            <input type="text" name="caption-input" id="new-image-caption" />
            <button type="submit">Submit</button>
        </form>
    )
}
export default imageForm;