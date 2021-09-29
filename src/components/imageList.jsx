
function ImageList(props) {


    const imagesHTML = props.images.map(image => (
        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '%', flexDirection: 'column', marginBottom: '100px', padding: '20px', border: 'none', borderRadius: '10px' }}>
            <img style={{ border: 'none', borderRadius: '10px', width: '100%', boxShadow: ' gray 5px 5px 10px 5px', marginBottom: '20px' }} src={image.url} alt={image.text} />
            <caption>{image.text}</caption>
            <button type="button" onClick={() => props.deleteImage(props.id)}>Delete</button>
        </li>
    ));


    return (
        <ul style={{ width: '60%', paddingInlineStart: '0px' }}>{imagesHTML}</ul>
    )

}

export default ImageList;