import React from "react";

const ImageGallery = ({ gallery }) => {
  return (
    <div>
      <ul>
        {gallery.length > 0 ? (
          gallery.map((image) => (
            <li key={image.id}>
              <div>
                {image.urls?.small ? (
                  <img src={image.urls.small} alt={image.alt_description} />
                ) : (
                  <p>No images available</p>
                )}
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
