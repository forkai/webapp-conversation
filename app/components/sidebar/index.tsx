import React from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import {
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline'
import { ChatBubbleOvalLeftEllipsisIcon as ChatBubbleOvalLeftEllipsisSolidIcon } from '@heroicons/react/24/solid'
// import Card from './card'
import Image from 'next/image'
import Link from 'next/link'
import userPng from '../../../public/image/user.png'
import roboticon from '../../../public/image/roboticon.png'
import newdialogue from '../../../public/image/newdialogue.png'
import historicalDialogue from '../../../public/image/historicalDialogue.png'
import type { ConversationItem } from '@/types/app'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

const MAX_CONVERSATION_LENTH = 20

export type ISidebarProps = {
  copyRight: string
  currentId: string
  onCurrentIdChange: (id: string) => void
  list: ConversationItem[]
}

const Sidebar: FC<ISidebarProps> = ({
  copyRight,
  currentId,
  onCurrentIdChange,
  list,
}) => {
  const { t } = useTranslation()
  return (
    <div
      className="shrink-0 flex flex-col overflow-y-auto bg-white pc:w-[166px] tablet:w-[192px] mobile:w-[240px]  border-r border-gray-200 tablet:h-[calc(100vh)] mobile:h-screen"
    >
      <Link href='/' className="flex" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 20, paddingBottom: 40 }}>
        <Image src={roboticon} alt="User avatar" width={80} height={80} />
        <div style={{ fontWeight: 600, fontSize: 20, color: '#0D2855', textAlign: 'center', width: 100 }} >湖北物流<br />行业大模型</div>
      </Link>
      {list.length < MAX_CONVERSATION_LENTH && (
        <div className="flex " style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
          {/* <Button
            onClick={() => { onCurrentIdChange('-1') }}
            className="group block w-full flex-shrink-0 !justify-start !h-9 text-primary-600 items-center text-sm">
            <PencilSquareIcon className="mr-2 h-4 w-4" /> {t('app.chat.newChat')}
          </Button> */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => { onCurrentIdChange('-1') }}>
            <Image src={newdialogue} alt="User avatar" width={30} height={30} />
            <div style={{ fontSize: 18, color: '#2770E7', textAlign: 'center', marginTop: 5 }}>新对话</div>
          </div>
        </div>
      )}

      <nav className="mt-4 flex-1 space-y-1 bg-white p-4 !pt-0">
        {list.map((item) => {
          const isCurrent = item.id === currentId
          const ItemIcon
            = isCurrent ? ChatBubbleOvalLeftEllipsisSolidIcon : ChatBubbleOvalLeftEllipsisIcon
          return (
            <div
              onClick={() => onCurrentIdChange(item.id)}
              key={item.id}
              className={classNames(
                isCurrent
                  ? 'bg-primary-50 text-primary-600'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-700',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium cursor-pointer',
              )}
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}
            >
              {/* <ItemIcon
                className={classNames(
                  isCurrent
                    ? 'text-primary-600'
                    : 'text-gray-400 group-hover:text-gray-500',
                  'mr-3 h-5 w-5 flex-shrink-0',
                )}
                aria-hidden="true"
              /> */}
              <Image src={historicalDialogue} alt="User avatar" width={30} height={30} />
              {item.name}
            </div>
          )
        })}
      </nav>
      {/* <a className="flex flex-shrink-0 p-4" href="https://langgenius.ai/" target="_blank">
        <Card><div className="flex flex-row items-center"><ChatBubbleOvalLeftEllipsisSolidIcon className="text-primary-600 h-6 w-6 mr-2" /><span>LangGenius</span></div></Card>
      </a> */}
      <div className="flex" style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
        {/* <div className="text-gray-400 font-normal text-xs">© {copyRight} {(new Date()).getFullYear()}</div> */}
        <div className='flex' >
          <Image src={userPng} alt="User avatar" width={45} height={45} />
        </div>
      </div>
    </div>
  )
}

export default React.memo(Sidebar)
