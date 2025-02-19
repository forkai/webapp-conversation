import { getLocaleOnServer } from '@/i18n/server'

const LocaleLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const locale = getLocaleOnServer()
  return (
    <html lang={locale ?? 'en'} className="h-full">
      <body className="h-full">
        {/* <div className="overflow-x-auto"> */}
        <div >
          {/* <div className="w-screen h-screen min-w-[300px]">
            {children}
          </div> */}
          <div className="w-screen  min-w-[300px]">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

export default LocaleLayout
