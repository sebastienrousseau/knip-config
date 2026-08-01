export interface KnipConfig {
  entry?: string[];
  project?: string[];
  ignore?: string[];
  ignoreDependencies?: string[];
}

declare const config: KnipConfig;
export default config;
