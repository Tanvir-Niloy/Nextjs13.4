import Header from './components/Header'
import './globals.css'
import { Mulish } from 'next/font/google'

const mulish = Mulish({ subsets: ['latin'] })

export const metadata = {
  title: 'Netflix mini',
  description: 'Get any movie data free',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
         <Header/>
        {children}
      </body>
    </html>
  )
}
