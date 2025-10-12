import type { Metadata } from "next"
import "./globals.css"
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import { Providers } from "./providers"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Latif Ziyar MD Inc",
  description: "Our team provides comprehensive psychiatric services including addiction medicine, depression treatment, and Suboxone therapy to help you achieve lasting wellness.",
  // icons: {
  //   icon: "/logo.png"
  // },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#000",
                color: "#fff",       
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
