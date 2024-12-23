import { AppConfig } from '../types';
import { ReleaseData } from '../types';
import { VersionInfo } from './VersionInfo';
import { DownloadButton } from './DownloadButton';

interface AppCardProps {
  app: AppConfig;
  release: ReleaseData | null;
  error?: string;
}

export function AppCard({ app, release, error }: AppCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden px-6 py-8">
      <h2 className="text-2xl font-bold">{app.name}</h2>
      <p className="text-gray-600">{app.description}</p>

      {error ? (
        <div className="text-red-500">错误: {error}</div>
      ) : !release ? (
        <div className="text-gray-600">加载中...</div>
      ) : (
        <>
          <VersionInfo
            version={release.version}
            releaseDate={release.releaseDate}
          />
          <div>
            <DownloadButton asset={release.defaultAsset} />
          </div>
        </>
      )}
    </div>
  );
}