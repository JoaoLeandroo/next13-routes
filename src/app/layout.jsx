import Header from './components/Header/page'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Configurando Rotas NextJs',
  description: 'estudando a configuração das rotas no NextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
