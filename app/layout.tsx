import type { Metadata } from "next";
import { Toaster } from "sonner";
import DemoWatermark from "@/components/DemoWatermark";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clief Notes Talent — by Eduba",
  description:
    "A vetted talent network of AI builders, by Eduba. Hire the builders who've actually built things.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <DemoWatermark />
        <Toaster
          position="bottom-center"
          toastOptions={{
            style: {
              background: "#2a2a2a",
              color: "#f5f1e8",
              border: "1px solid #2a2a2a",
              borderRadius: "2px",
              fontFamily: "Georgia, serif",
              fontSize: "0.9375rem",
            },
          }}
        />
      </body>
    </html>
  );
}
