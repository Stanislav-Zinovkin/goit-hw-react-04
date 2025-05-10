import React from "react";
const ImageCard = ({ image }) => {
  return (
    <div>
      {image.urls?.small ? (
        <img src={image.urls.small} alt={image.alt_description} />
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default ImageCard;
