import * as React from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import Masonry from "react-masonry-css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
import InView from "react-intersection-observer";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const options = {
  buttons: {
    showDownloadButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

const Gallery = ({ images, initialValue }) => {
  const { t } = useTranslation();

  const [data, setData] = React.useState(images);
  const [value, setValue] = React.useState(initialValue ? initialValue : "");

  React.useEffect(() => {
    if (value)
      setData(
        images.filter((image) =>
          image.node.name.toLowerCase().includes(value.toLowerCase())
        )
      );
  }, [images, value]);

  const onChangeHandle = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="bg-black">
      <div className="flex flex-row justify-center">
        <label className="text-white px-2 text-xl" htmlFor="search">
          {t("Enter a keyword here")}
        </label>
        <input
          id="search"
          type="text"
          value={value}
          onChange={(e) => onChangeHandle(e)}
          placeholder={t("Search")}
          className="bg-trueGray-900 border-2 text-white py-1 px-5 rounded-md"
        />
      </div>
      <div
        role="presentation"
        onDragStart={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
      >
        <SimpleReactLightbox>
          <SRLWrapper options={options}>
            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="flex w-auto"
              columnClassName="my-masonry-grid_column"
            >
              {data.map((image, index) => {
                const imageData = getImage(image.node.featuredImg);

                // If the image link doesn't exist, we don't need to create GatsbyImage
                if (!imageData) return "";

                return (
                    <GatsbyImage
                      key={index}
                      image={imageData}
                      alt={image.node.name}
                      className="m-3 hover:opacity-50"
                    />
                );
              })}
            </Masonry>
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </div>
  );
};

export default Gallery;
