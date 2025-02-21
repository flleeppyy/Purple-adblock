declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    NODE_ENV: "development" | "production";
    TWITCH_CLIENT_ID: string;
    PROXY_URL: string;
  }
}
