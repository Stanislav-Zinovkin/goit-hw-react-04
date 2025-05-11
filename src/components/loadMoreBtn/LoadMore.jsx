import React from "react";
import styles from "./LoadMore.module.css";
const LoadMore = ({ loading, gallery, handleLoadMore }) => {
  return (
    <>
      {gallery.length > 0 && !loading && (
        <button onClick={handleLoadMore} className={styles.btn}>
          Load more
        </button>
      )}
    </>
  );
};
export default LoadMore;
