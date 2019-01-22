declare module "*/config.json" {
  interface Config {
    host: string;
    paths: string[];
  }

  const value: Config;
  export = value;
}
