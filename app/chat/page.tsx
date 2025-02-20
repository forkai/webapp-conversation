import type { FC } from 'react'
import React from 'react'

import type { IMainProps } from '@/app/components'
import Main from '@/app/components'

const App: FC<IMainProps> = ({
  params,
  searchParams,
}: any) => {
  return (
    <Main params={params} type={searchParams.type} />
  )
}

export default React.memo(App)
