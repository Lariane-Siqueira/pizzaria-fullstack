import { Roboto } from "next/font/google";
import AppProvider from "../Components/AppContext"
import Header from "../Components/layout/Header.jsx";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ['400', '500', '700'] })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <main className="max-w-6xl mx-auto p-4">
          <AppProvider>

            <Header />
            {children}
            <footer className="border-t p-8 text-center m-16 text-gray-500">
              &copy; 2024 All rights reserved
            </footer>
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
