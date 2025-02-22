import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

const App: FC<IMainProps> = ({
  params,
  searchParams,
}: any) => {
  return (
    <div className="overflow-x-auto">
      <div className="w-screen h-screen min-w-[300px]">
        <Main params={params} type={searchParams.type} />
      </div>
    </div>
  )
}

export default React.memo(App)
