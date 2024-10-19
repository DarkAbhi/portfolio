import NavigationPanel from "@/components/navigation-panel";
import TopNav from "@/components/top-nav";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="h-full w-full md:px-32">
          <TopNav />
          {children}
        </div>
      </body>
    </html>
  );
}
