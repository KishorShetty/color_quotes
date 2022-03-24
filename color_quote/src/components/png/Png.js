import { useEffect, useState } from "react";
import axios from "axios";
import "./Png.css";

const Png = ({ color, input }) => {
  const [pngData] = useState();
  const [imageData, setImageData] = useState();
  // https://4000-bahejav-appattic-kg9sdfgbpf0.ws-us38.gitpod.io/quoteToPng
  useEffect(() => {
    async function sendData() {
      const imageData = await axios.post(
        `https://4000-bahejav-appattic-kg9sdfgbpf0.ws-us38.gitpod.io/quoteToPng`,
        { color, input }
      );
      // setPngData(data);
      console.log(imageData);
      // console.log(imageData.data.image);
      setImageData(imageData.data.image);
    }
    sendData();
  }, [pngData, color, input]);
  return (
    <>
      <h2>{pngData}</h2>
      {/* <h3>Png Works</h3> */}
      <div
        className="container"
        style={{
          border: `3px solid hsla(${color.hue},${color.saturation * 100}%,${
            color.brightness * 100
          }%,${color.alpha})`,
        }}
      >
        {/* <span
          className="quote"
          style={{
            color: `hsla(${color.hue},${color.saturation * 100}%,${
              color.brightness * 100
            }%,${color.alpha})`,
          }}
        >
          {input}
        </span> */}
        <img src={imageData} alt="pic"/>
      </div>
    </>
  );
};

export default Png;
