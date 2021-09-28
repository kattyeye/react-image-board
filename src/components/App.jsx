import { useState, useEffect } from 'react';
import imageForm from './imageForm';
import imageList from './imageList';



function App() {

  const [images, setImages] = useState([])

  useEffect(() => {
    setImages([
      {
        id: 1,
        websiteUrl: '',
        isValid: true,
      },
      {
        id: 2,
        websiteUrl: '',
        isValid: true,
      },
      {
        id: 3,
        websiteUrl: '',
        isValid: true,
      },

    ])
  }, []);


  return (
    <div className="App">
      <h1>React Image Board</h1>
      <imageForm />
    </div>
  );
}

export default App;
