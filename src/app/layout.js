import { DM_Sans as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
  title: "CariTemen - Devscale",
  description: "Batch3 Final Assignment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
