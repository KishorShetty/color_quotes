import "./Png.css";

const Png = ({color}) => {
    return(<>
    <h3>Png Works</h3>
    <div className="container" style={{border:`3px solid hsla(${color.hue},${(color.saturation*100)}%,${(color.brightness*100)}%,${color.alpha})`}}>
        {console.log(`1px solid hsla(${color.hue},${(color.saturation*100)}%,${(color.brightness*100)}%,${color.alpha})`)}

    </div>
    </>
    )
};

export default Png;
