export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_BITLY_TOKEN: string;
      REACT_APP_GUID: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
