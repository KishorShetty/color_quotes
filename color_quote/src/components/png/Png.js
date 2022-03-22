import "./Png.css";

const Png = ({ color, input }) => {
  return (
    <>
      {/* <h3>Png Works</h3> */}
      <div
        className="container"
        style={{
          border: `3px solid hsla(${color.hue},${color.saturation * 100}%,${
            color.brightness * 100
          }%,${color.alpha})`,
        }}
      >
    
        <span className="quote" style={{color:`hsla(${color.hue},${color.saturation * 100}%,${
            color.brightness * 100
          }%,${color.alpha})`}}>{input}</span>
      </div>
    </>
  );
};

export default Png;
