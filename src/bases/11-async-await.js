//Async - Await

const getImagePromesa = async() => {
    try {
        const apiKey = 'BfQwUFDlyLOK0lfY3LWerd2QzkiMttKn';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await resp.json().then(({data}) => {
            const {url} = data.images.original;
    
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        });  
    } catch (error) {
        console.error(error);
    }
}

getImagePromesa();










// urlApi
//     .then(resp => resp.json())
//     .then(({data}) => {
//         // console.log(data.images.original.url);
//         const {url} = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);

//     })
//     .catch(error => console.warn(error));