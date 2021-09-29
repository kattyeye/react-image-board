import { useState, useEffect } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';

function ImageBoard() {

    const [images, setImages] = useState([]);
    const [counter, setCounter] = useState(3);
    const [showDropDown, setShowDropDown] = useState(false);

    useEffect(() => {
        setImages([
            {
                id: 1,
                url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
                text: 'Field',
            },
            {
                id: 2,
                url: 'https://images.unsplash.com/photo-1613739722718-9548582af82f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8cm5TS0RId3dZVWt8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                text: 'Cool Architecture',
            },
            {
                id: 3,
                url: 'https://images.unsplash.com/photo-1617229378071-daa5eeff0db7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8UzRNS0xBc0JCNzR8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                text: 'Handbags',
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

    function deleteImage(id) {
        const index = images.findIndex(image => image.id === id);
        const remainingImages = [...images];
        remainingImages.splice(index, 1);
        setImages(remainingImages);
    }
    {/** stole from notes */ }


    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {showDropDown &&
                <div>
                    <button style={{ fontFamily: "roboto", textTransform: 'uppercase', fontWeight: 900, padding: 20 }} onClick={() => { setShowDropDown(false) }}>Close</button>
                    <ImageForm addImage={addImage} />
                </div>
            }
            {!showDropDown &&
                < button style={{ fontFamily: "roboto", textTransform: 'uppercase', fontWeight: 900, padding: 20 }} onClick={() => { setShowDropDown(true) }}>Add Image</button>
            }

            <h1 style={{ fontFamily: "roboto", textTransform: 'uppercase', fontWeight: 900, textAlign: 'center', marginBottom: '100px' }}>React Image Board</h1>

            <ImageList images={images} deleteImage={deleteImage} />
        </div >
    );
}

export default ImageBoard;
