import app from "./app.js";

app.listen(process.env.PORT, () => {
    console.log(`Server is Running on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
  });