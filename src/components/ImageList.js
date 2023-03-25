import './ImageList.css';

import React from "react";
import ImageShow from "../components/ImageShow";

export default function ImageList({ images }) {
  const renderImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list"> {renderImages}</div>;
}
