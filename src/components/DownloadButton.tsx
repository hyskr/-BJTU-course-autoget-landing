import React from 'react';
import { MonitorDown, Github } from 'lucide-react';
import type { PlatformAsset } from '../types';

interface DownloadButtonProps {
  asset: PlatformAsset;
}
function CloudDownload() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cloud-download"><path d="M12 13v8l-4-4" /><path d="m12 21 4-4" /><path d="M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284" /></svg>
  )
}
export function DownloadButton({ asset }: DownloadButtonProps) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <a
        href={asset.downloadUrl}
        className="xl:w-1/2 w-full inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <MonitorDown />
        <span>下载安装包 ({asset.size}MB)</span>
      </a>
      <a
        href={asset.mirrorUrl}
        className="xl:w-1/2 w-full inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <CloudDownload />
        <span>镜像站下载 ({asset.size}MB)</span>
      </a>
      <a
        href={asset.githubUrl}
        className="xl:w-1/2 w-full inline-flex items-center gap-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-bold px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        <Github />
        <span>GitHub 项目地址</span>
      </a>
    </div>
  );
}