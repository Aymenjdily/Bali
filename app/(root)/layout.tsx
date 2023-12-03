import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import '../globals.css'
import { Theme } from '@radix-ui/themes';

const mont = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bali',
  description: 'Mohamed: Master of visuals. Capturing moments, crafting stories, and weaving magic through the lens. 📷🎥✨',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Theme>
          <main className='bg-[#F2F2F2]'>
            {children}
          </main>
        </Theme>
      </body>
    </html>
  )
}
