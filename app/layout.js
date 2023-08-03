"use client"
import './globals.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
