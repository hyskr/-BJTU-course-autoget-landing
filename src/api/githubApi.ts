import { ReleaseData, PlatformAsset } from '../types';

export async function fetchLatestRelease(): Promise<ReleaseData> {
  const response = await fetch('https://api.github.com/repos/hyskr/BJTU-course-autoget-program/releases/latest');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();
  const assets: PlatformAsset[] = data.assets.map(asset => ({
    name: asset.name,
    downloadUrl: asset.browser_download_url,
    mirrorUrl: `https://ghgo.xyz/${asset.browser_download_url}`,
    githubUrl: data.html_url,
    size: (asset.size / (1024 * 1024)).toFixed(2)
  }));

  const defaultAsset = assets.find(asset => asset.name.toLowerCase().endsWith('.exe'))
    || assets[0];

  if (!defaultAsset) {
    throw new Error('No download assets found');
  }

  const date = new Date(data.published_at);
  const formattedDate = date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).replace(/\//g, '-');

  return {
    version: data.tag_name,
    releaseDate: formattedDate,
    assets,
    defaultAsset
  };
}
