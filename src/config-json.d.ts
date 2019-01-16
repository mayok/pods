declare module "*/config.json" {
  interface Config {
    host: string;
    port: string;
  }

  const value: Config;
  export = value;
}
