//Aqui hacemos la peticion http para traer la informacion de la API
export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=RuVOGa9robnLHpNb9xQoCTCLPr3qbiGB&q=${ category }&limit=20`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    console.log(gifs);
    return gifs;

}