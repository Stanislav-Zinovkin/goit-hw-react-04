import React from "react";
const ImageCard = ({ image, onImageClick }) => {
  return (
    <div>
      {image.urls?.small ? (
        <img
          src={image.urls.small}
          alt={image.alt_description}
          onClick={() => onImageClick(image.urls.regular)}
        />
      ) : (
        <p>No images available</p>
      )}
    </div>
  );
};

export default ImageCard;
