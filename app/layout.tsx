import '../globals.css'
export const metadata = { title: 'متین — Alpha', description: 'Matin — Persian inline annotation app (alpha)' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-screen p-6">
        <header className="mb-6">
          <h1 className="text-2xl font-bold">متین</h1>
          <p className="text-sm text-gray-500">نسخهٔ نخست — alpha</p>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
