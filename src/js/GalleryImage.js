import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";

function Gallery() {
  return (
    <div className="gallery">
      <header>
        <div className="header-wrapper">
          <h1>Vyberte obrázek</h1>
        </div>
      </header>
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default Gallery;
