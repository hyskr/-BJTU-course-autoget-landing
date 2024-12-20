import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { DownloadButton } from './components/DownloadButton';
import { Title } from './components/Title';
import { VersionInfo } from './components/VersionInfo';
import { fetchLatestRelease } from './api/githubApi';
import type { ReleaseData } from './types';

export function App() {
  const [releaseData, setReleaseData] = useState<ReleaseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLatestRelease()
      .then(setReleaseData)
      .catch(err => setError(err.message));
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-gray-800 relative">
      <Background />
      <Header />

      <main className="container mx-auto px-4 pt-20 pb-32">
        <div className="max-w-4xl mx-auto text-center">
          <Title />

          {releaseData && (
            <>
              <VersionInfo
                version={releaseData.version}
                releaseDate={releaseData.releaseDate}
              />
              <div className="mb-16">
                <DownloadButton asset={releaseData.defaultAsset} />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}