import React from 'react';

interface VersionInfoProps {
  version: string;
  releaseDate: string;
}

export function VersionInfo({ version, releaseDate }: VersionInfoProps) {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <span className="px-4 py-2 shadow-xl bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">
        版本号: {version}
      </span>
      <span className="px-4 py-2 shadow-xl bg-gray-50 border border-gray-200 rounded-full text-sm text-gray-600">
        更新于: {releaseDate}
      </span>
    </div>
  );
}