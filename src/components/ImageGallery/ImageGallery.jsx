import React from "react";
import ImageCard from "./ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ gallery, onImageClick }) => {
  return (
    <div className={styles.container}>
      <ul>
        {gallery.length > 0 ? (
          gallery.map((image) => (
            <li key={image.id} className={styles.item}>
              <div>
                <ImageCard image={image} onImageClick={onImageClick} />
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
