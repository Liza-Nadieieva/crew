import Header from '@/app/components/header/Header'; 

import "./globals.css";


export const metadata = {
  title: "Crew Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
      <div></div>
        {children}
      </body>
    </html>
  );
}
