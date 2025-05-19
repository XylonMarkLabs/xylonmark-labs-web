import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from "./components/ThemeProvider";
import Navbar from "./components/Navbar/Navbar";

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: "400",
});

export const metadata = {
  title: 'XylonMark Labs',
  description: 'Professional IT services for your business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <Navbar />
          <main style={{ backgroundColor: '#0A0A1A' }} className="min-h-screen bg-darkBlue dark:bg-darkBlue ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}