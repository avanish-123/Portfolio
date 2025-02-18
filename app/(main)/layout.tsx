export default function HomePageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-3">
        <div className="grid grid-cols-[1fr_2fr]">
            <div className="w-full h-1 bg-red-600"></div>
            <div className="w-full h-1 bg-green-600"></div>
        </div>
        {children}
      </div>
    </div>
  );
}
