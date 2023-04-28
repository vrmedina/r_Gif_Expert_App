import PropTypes from "prop-types";
import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from "react";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {images.map(( { id, title } ) => (
          <li key={ id }>{ title }</li>
        ))}
      </ol>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
