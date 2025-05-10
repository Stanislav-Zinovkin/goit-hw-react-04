import React from "react";
import { PacmanLoader } from "react-spinners";
const Loader = ({ loading }) => {
  return (
    <div>
      {loading && <PacmanLoader loading={loading} size={25} color="blue" />}
    </div>
  );
};
export default Loader;
