import Navbar from "@/components/Navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Container from "@/components/Container/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yasin Shop",
  description: "Shopping Website",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <Container>{children}</Container>
      </body>
    </html>
  );
};
export default RootLayout;
