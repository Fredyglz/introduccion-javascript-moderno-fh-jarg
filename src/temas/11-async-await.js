// const getImagenPromesa = () => new Promise ((resolve) => resolve('https://google.com/'));

const getImagen = async() => {
    try {
        const apiKey = 'OKjvMOhz1ETtt0OO4VcnOQmK6hZXdOyK';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json(); 
        const {url} = data.images.original; 
        const  img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // manejo del error
        console.error(error);
    }
}

getImagen()