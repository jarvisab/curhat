import AddContentMessages from '@/components/form/add-content'
import TitleBanner from '@/components/layout/banner-add';

export const runtime = "edge";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-10 flex flex-col justify-center">
      <TitleBanner/>
      <AddContentMessages />
    </main>
  )
}
