import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./HomeFeed.css";
const fadeImages = [
  {
    url: "https://i.ytimg.com/vi/9dZEXfmN3p0/maxresdefault.jpg",
  },
  {
    url: "https://pbs.twimg.com/media/EltgHpNU0AIYGmS.jpg",
  },
  {
    url: "https://pbs.twimg.com/media/EmSofiNVkAAJjm3.jpg",
  },

  {
    url: "https://i.ytimg.com/vi/Glqf4T__qVM/maxresdefault.jpg",
  },
];
let count = 0;
export default function ImageChange() {
  return (
    <>
      <div
        style={{
          width: "auto",
          height: 600,
          color: "black",
          paddingLeft: "10px",
          paddingRight: "10px",
        }}
      >
        <div className="slide-container">
          <Fade>
            {fadeImages.map((fadeImage, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container ade-in-image homefeed">
                  <img
                    className="img1"
                    width="100%"
                    height="500px"
                    src={fadeImage.url}
                  />
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
}
