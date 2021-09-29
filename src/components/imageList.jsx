
function ImageList(props) {


    const imagesHTML = props.images.map(image => (
        <li style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginBottom: '100px' }}>
            <img style={{ width: "400px", height: '100%', border: 'none', borderRadius: '10px' }} src={image.url} alt={image.text} />
            <caption>{image.text}</caption>
            <button type="button" onClick={() => props.deleteImage(props.id)}>Delete</button>
        </li>
    ));


    return (
        <ul style={{ paddingInlineStart: '0px' }}>{imagesHTML}</ul>
    )

}

export default ImageList;