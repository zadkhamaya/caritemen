import { DM_Sans as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { Provider } from "@/components/provider";
import { Header } from "@/components/sharedUI/Header";

const fontSans = FontSans({ subsets: ["latin"] });

export const metadata = {
    title: "CariTemen - Devscale",
    description: "Batch3 Final Assignment",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={fontSans.className}>
                <main className="max-w-5xl m-auto py-4 space-y-20">
                    <Header />
                    <Provider>{children}</Provider>
                </main>
            </body>
        </html>
    );
}
