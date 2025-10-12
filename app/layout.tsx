import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { Toaster } from "@/app/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Maple Leaf Cleaners Plus",
  description: "Maple Leaf Cleaners Plus offer professional cleaning services to residential and commercial customers.",
  openGraph: {
    title: "Maple Leaf Cleaners Plus",
    description: "Professional cleaning services for homes and businesses.",
    url: "https://mapleleafcleanersplus.vercel.app",
    siteName: "Maple Leaf Cleaners Plus",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Maple Leaf Cleaners Plus",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Toaster />
        
        {/* Tawk.to Script */}
        {/* <Script
          id="tawkto-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/66e8b88f50c10f7a00ab8a7d/1i7uh1s9f';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        /> */}

        {/* Google Tag Manager Script */}
        <Script
          id="gtag-js"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WLZMXYBEE1"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WLZMXYBEE1');
            `,
          }}
        />
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.1.0/typed.umd.js"
          integrity="sha512-+2pW8xXU/rNr7VS+H62aqapfRpqFwnSQh9ap6THjsm41AxgA0MhFRtfrABS+Lx2KHJn82UOrnBKhjZOXpom2LQ=="
          crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      </body>
    </html>
  );
}
