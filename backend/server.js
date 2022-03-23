const app = require("./app");
const textToImage = require("text-to-image");
// import { generate } from "text-to-image";

// const dotenv = require("dotenv"); // No need for heroku/any hosting platform.
// const connectDatabase = require("./config/database");

//CORS o for connecting the backend and FE used in app.js
//after env db for getting the path

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// async function generatePng(quote) {
//   const uri = await textToImage.generate(quote, {});
//   return uri;
//   //   console.log(uri);
// }

app.post("/quoteToPng", (req, res) => {
  if (req.body.input) {
    console.log("called quoteToPng");
    // const uri = "";
    // const imageBase64 = generatePng(req.body.input);
    generatePng(req.body.input);

    async function generatePng(quote) {
      const uri = await textToImage.generate(quote, {
        fontFamily:'lato',
        fontSize: 50,
        lineHeight: 50,
        maxWidth:1000,
        customHeight:500,
        bgColor: "black",
        margin: 5,
        verticalAlign: 'center',
        textAlign:'center',
        textColor: "white",
      });
      // return uri;
      //   console.log(uri);
      // }

      // console.log(imageBase64);
      res.json({
        success: true,
        message: "success",
        pngData: req.body,
        image: uri,
        //data here png
      });
    }
    // console.log(req.body);
  } else {
    res.json({
      success: false,
      message: "failed",
    });
  }
});

// connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
