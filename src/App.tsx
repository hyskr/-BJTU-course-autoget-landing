import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Background } from './components/Background';
import { Title } from './components/Title';
import { fetchLatestRelease } from './api/githubApi';
import type { ReleaseData } from './types';
import { apps } from './config/apps';
import { AppCard } from './components/AppCard';

export function App() {
  const [releases, setReleases] = useState<Record<string, ReleaseData | null>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});


  useEffect(() => {
    apps.forEach(app => {
      fetchLatestRelease(app.repo)
        .then(release => {
          console.log(release);
          setReleases(prev => ({ ...prev, [app.id]: release }));
        })
        .catch(err => {
          setErrors(prev => ({ ...prev, [app.id]: err.message }));
        });
    });
  }, []);

  return (
    <div className="min-h-screen text-gray-800 relative">
      <Background />
      <Header />
      <main className="container mx-auto px-4 pt-10">
        <div className="max-w-8xl mx-auto text-center">
          <Title />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {apps.map(app => (
              <AppCard
                key={app.id}
                app={app}
                release={releases[app.id]}
                error={errors[app.id]}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}