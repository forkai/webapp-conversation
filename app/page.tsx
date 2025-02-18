import Link from 'next/link'
import React from 'react'

const App = ({
  params,
}: any) => {
  return (
    <div>
      <p>静态页面</p>
      <p>
        <Link href="/chat">chat</Link>
      </p>
    </div>
  )
}

export default React.memo(App)
