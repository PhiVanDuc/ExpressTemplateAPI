const express = require("express");
const morgan = require('morgan');

const errorMiddleware = require("./src/middlewares/error");
const notFoundMiddleware = require("./src/middlewares/not-found");

const indexRoute = require("./src/routes/index");
const apiRoute = require("./src/routes/api");

const app = express();

// Middleware chuyển đổi dữ liệu trong request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware logger
app.use(morgan('dev'));

// Sử dụng các route
app.use("/", indexRoute);
app.use("/api", apiRoute);

// Middleware bắt lỗi chung
app.use(notFoundMiddleware);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => console.log(`Server đang chạy trên port ${process.env.PORT}`));