export interface PlatformAsset {
  name: string;
  downloadUrl: string;
  mirrorUrl: string;
  githubUrl: string;
  size: string;
}

export interface ReleaseData {
  version: string;
  releaseDate: string;
  assets: PlatformAsset[];
  defaultAsset: PlatformAsset;
}

export interface AppConfig {
  id: string;
  name: string;
  description: string;
  repo: string;
}