import { cookies } from "next/headers";
import Loader from "./components/Loader"; // Adjust path if needed
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const cookieStore = await cookies();
  
  const hasVisited = cookieStore.has("hasVisited");

  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50 antialiased">
        
        {/* 3. ONLY render the loader if the cookie does NOT exist */}
        {!hasVisited && <Loader />}
        
        {children}
      </body>
    </html>
  );
}