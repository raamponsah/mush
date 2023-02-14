import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <div className="p-4 max-w-full h-screen bg-blue-300 flex flex-col">
    <Component {...pageProps} />
  </div>
}
