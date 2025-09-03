import '@/styles/layout/html.css'

export default function ClassLayout( { children }: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      { children }
    </main>
  );
}