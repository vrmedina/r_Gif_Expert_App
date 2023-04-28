export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=HXBATtGXpi0AmG2K5kgTZW7oWkoSoase&q=${category}&limit=5`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));
  
  return gifs;
};
