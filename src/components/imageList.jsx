import Images from './ImageBoard';


function ImageList(props) {

    const imagesHTML = props.images.map(imageWithCap => <Images key={imageWithCap.id} {...imageWithCap} />)


    return (
        <>
            <container>
                {imagesHTML}
            </container>
        </>
    )

}

export default ImageList;