import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasin Shop",
  description: "Shopping Website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Toaster position="bottom-right"/>
      </body>
    </html>
  );
};
export default RootLayout;
