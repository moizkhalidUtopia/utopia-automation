import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Utopia Automation",
  description: "Utopia Automation - Automation for Utopia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
