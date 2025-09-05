import { Footer, Sidebar, TopMenu } from '@/components';

export default function DashLayout( { children }: {
  children: React.ReactNode;
} ) {
  return (
    <main className="min-h-screen bg-white">

      <TopMenu />

      <div className="px-0 sm:px-10">
        { children }

      </div>

      <Footer />
    </main>
  );
}