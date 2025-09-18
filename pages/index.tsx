import LoginButton from '@/components/LoginButton'
import { Accordion } from '@/components/Accordion'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">متین</h1>
      <LoginButton />
      <div className="w-full max-w-2xl mt-8">
        <Accordion type="single" collapsible>
          {/* Sections for text and annotations will be dynamically rendered */}
        </Accordion>
      </div>
    </main>
  )
}