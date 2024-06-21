

import ContentBoilerplate from '@/components/content/content-template';
import TitleBanner from '@/components/layout/banner-main';

export const runtime = "edge";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-10 flex flex-col justify-center">
      <TitleBanner />
      <ContentBoilerplate />
    </main>
  );
}
