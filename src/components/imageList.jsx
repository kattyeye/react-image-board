
function ImageList(props) {


    const imagesHTML = props.images.map(image => (
        <li>
            <img src={image.url} alt="" />
            <caption>{image.text}</caption>
        </li>
    ));


    return (
        <ul>{imagesHTML}</ul>
    )

}

export default ImageList;