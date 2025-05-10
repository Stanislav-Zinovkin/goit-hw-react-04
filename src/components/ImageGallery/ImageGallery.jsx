import React from "react";
import ImageCard from "./ImageCard/ImageCard";

const ImageGallery = ({ gallery }) => {
  return (
    <div>
      <ul>
        {gallery.length > 0 ? (
          gallery.map((image) => (
            <li key={image.id}>
              <div>
                <ImageCard image={image} />
              </div>
            </li>
          ))
        ) : (
          <p>No images found</p>
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
