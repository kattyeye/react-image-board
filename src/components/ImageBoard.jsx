import { useState, useEffect } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';
import Image from './Image.css'

function ImageBoard() {

    const [images, setImages] = useState([]);
    const [counter, setCounter] = useState(3);
    const [showDropDown, setShowDropDown] = useState(false);

    useEffect(() => {
        setImages([
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
                text: '',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
                text: '',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
                text: '',
            },

        ])

    }, []);

    console.log({ images })


    function addImage(url, text) {
        const newImage = { id: counter, url, text };
        setImages([...images, newImage]);
        console.log({ images })
        setCounter(counter + 1);
        console.log({ images })
    }



    return (
        <div className="App">

            <h1>React Image Board</h1>
            {showDropDown &&
                <div>
                    <ImageForm addImage={addImage} />
                    <button onClick={() => { setShowDropDown(false) }}>Close</button>
                </div>
            }
            {!showDropDown &&
                < button onClick={() => { setShowDropDown(true) }}>Open</button>
            }

            <ImageList images={images} />
        </div >
    );
}

export default ImageBoard;
