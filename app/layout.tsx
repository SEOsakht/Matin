import './globals.css'

export const metadata = {
  title: 'متین',
  description: 'برنامه فارسی حاشیه‌نویسی',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" className="dark">
      <body>{children}</body>
    </html>
  )
}