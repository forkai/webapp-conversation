import { getLocaleOnServer } from '@/i18n/server'
import './styles/globals.css'
import './styles/markdown.scss'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className="h-full bg-main-background bg-cover bg-center">
        {children}
      </body>
    </html>
  )
}

export default LocaleLayout
