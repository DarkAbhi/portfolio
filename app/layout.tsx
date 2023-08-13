import NavigationPanel from "@/components/navigation-panel";
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
        <div className="flex flex-col lg:flex-row bg-white sm:overflow-auto lg:overflow-hidden">
          <NavigationPanel />
          {children}
        </div>
      </body>
    </html>
  );
}
