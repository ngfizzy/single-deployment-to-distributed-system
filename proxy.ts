import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

// Create Express Server
const app = express();

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
    pathRewrite: { "^/auth": "" },
  })
);

app.use(
    "/kyc",
    createProxyMiddleware({
      target: "http://localhost:6000",
      changeOrigin: true,
      pathRewrite: { "^/auth": "" },
    })
  );
  app.use(
    "/notifications",
    createProxyMiddleware({
      target: "http://localhost:8000",
      changeOrigin: true,
      pathRewrite: { "^/auth": "" },
    })
  );

  // Start Proxy
app.listen(80, () => {
    console.log("started proxy server on port 80");
});