import { useState, useEffect } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';


function ImageBoard() {

    const [images, setImages] = useState([]);
    const [counter, setCounter] = useState(2);


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

    function addImage(url) {
        const newImage = { id: counter, url, text: '' };
        setImages([...images, newImage]);
        setCounter(counter + 1);
    }

    // function addCaption(text) {
    //     const newCaption = { id: counter, text };
    //     setCaption([...captions, newCaption]);
    //     setCounter(counter + 1);
    // }




    return (
        <div className="App">
            <h1>React Image Board</h1>
            <ImageForm addImage={addImage} />
            <ImageList images={images} />
        </div>
    );
}

export default ImageBoard;
