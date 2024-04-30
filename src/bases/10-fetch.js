
//FETCH API

const apiKey = 'BfQwUFDlyLOK0lfY3LWerd2QzkiMttKn';
const urlApi = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// urlApi.then((resp) => {
//     resp.json().then(data => {
//         console.log(data);
//     })
// }).catch(error => console.warn(error));

urlApi
    .then(resp => resp.json())
    .then(({data}) => {
        // console.log(data.images.original.url);
        const {url} = data.images.original;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

    })
    .catch(error => console.warn(error));