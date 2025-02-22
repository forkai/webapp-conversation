import Image from 'next/image'
import Link from 'next/link'
import userPng from '@/public/image/user.png'
import newdialogue from '@/public/image/newdialogue.png'
import historicalDialogue from '@/public/image/historicalDialogue.png'
import Icon from '@/public/image/roboticon.png'

const SideBar: React.FC = () => {
  return (
    <div className='fixed left-0 flex flex-col items-center justify-between w-40 h-full p-8 bg-white/40'>
      <div className='flex flex-col items-center justify-center'>
        <Image src={Icon} alt='icon' />
        <div className='text-xl text-center'>湖北物流行业大模型</div>
      </div>

      <div className='flex flex-col justify-start flex-1 p-20'>
        <Link href={{ pathname: '/chat' }}
          className='flex flex-col items-center justify-center cursor-pointer'>
          <Image src={newdialogue} alt='icon' />
          <div>新对话</div>
        </Link>

        <div className='h-[1px] bg-[#D6E2FD] w-20 my-16'></div>

        <div className='flex flex-col items-center justify-center cursor-pointer'>
          <Image src={historicalDialogue} alt='icon' />
          <div>历史对话</div>
        </div>
      </div>

      <div className='cursor-pointer'>
        <Image src={userPng} alt='icon' />
      </div>
    </div>
  )
}
export default SideBar
