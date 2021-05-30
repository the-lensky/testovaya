const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${API_KEY}&per_page=24&page=1&format=json&nojsoncallback=true&text=`


export {
    API_KEY,
    API_URL
}
