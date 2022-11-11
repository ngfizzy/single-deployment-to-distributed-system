import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

// Create Express Server
const app = express();

app.use(
  "/auth",
  createProxyMiddleware({
    target: "http://auth:4000",
    changeOrigin: true,
    pathRewrite: { "^/auth": "" },
  })
);

app.use(
    "/kyc",
    createProxyMiddleware({
      target: "http://kyc:6000",
      changeOrigin: true,
      pathRewrite: { "^/kyc": "" },
    })
  );
  app.use(
    "/notifications",
    createProxyMiddleware({
      target: "http://notification:8000",
      changeOrigin: true,
      pathRewrite: { "^/notifications": "" },
    })
  );

  // Start Proxy
app.listen(80, () => {
    console.log("started proxy server on port 80");
});