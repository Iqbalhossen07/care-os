import type { Metadata } from "next";
import { Lora, Merriweather } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://carestaff.iqbalhossen.xyz"),
  title: "CareStaff OS",
  description: "The smart homecare technology partner",
  openGraph: {
    title: "CareStaff OS | The smart homecare technology partner",
    description: "Put your compliance on autopilot. Deliver outstanding care.",
    url: "https://carestaff.iqbalhossen.xyz",
    siteName: "CareStaff OS",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareStaff OS",
    description: "Put your compliance on autopilot. Deliver outstanding care.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${lora.variable} ${merriweather.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
