const errorMiddleware = (error, req, res, next) => {
    const status = error.status || 500;
    const message = error.message || "Lỗi server nội bộ!";

    console.error(`
    Lỗi server nội bộ: ${message}
    `);

    res.status(status).json({
        status,
        message,
        ...(process.env.NODE_ENV === "development" && { stack: error.stack })
    });
}

module.exports = errorMiddleware;