import { useState, useEffect } from 'react';
import ImageForm from './ImageForm';
import ImageList from './ImageList';



function App() {

  const [images, setImages] = useState([])
  const [counter, setCounter] = useState(4);


  useEffect(() => {
    setImages([
      {
        id: 1,
        websiteUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        isValid: true,
      },
      {
        id: 2,
        websiteUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        isValid: true,
      },
      {
        id: 3,
        websiteUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80',
        isValid: true,
      },

    ])
  }, []);

  function addImages(websiteUrl) {
    const newImage = { id: counter, websiteUrl, isValid: false };
    setImages([...images, newImage]);
    setCounter(counter + 1);
  }






  return (
    <div className="App">
      <h1>React Image Board</h1>
      <ImageForm addImages={addImages} />
    </div>
  );
}

export default App;
