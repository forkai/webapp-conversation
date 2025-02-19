import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Icon from '@/public/image/roboticon.png'

const Card = ({ title, desc, icon, type }: any) => {
  return (
    <Link href={{ pathname: '/chat', query: { type, title } }} className='flex flex-col justify-between shadow-md p-6 m-4 bg-white rounded-lg h-40 hover:shadow-[0_0_0_4px_#2ca5fd] cursor-pointer'>
      <div className='flex justify-between'>
        <div className='font-semibold text-2xl'> {title} </div>
        <div className='icon'>{icon}</div>
      </div>
      <div className='desc'>{desc}</div>
    </Link>
  )
}

const App = () => {
  const list = [
    {
      title: '智能订舱',
      desc: '为客户提供中欧班列信息查询，运行方案推荐等服务。',
      icon: '',
      type: 'booking',
    },
    {
      title: '智运优选',
      desc: '帮助货主、货代选择最佳运输方案,提升物流效率。',
      icon: '',
      type: 'transport',
    },
    {
      title: '数字增信',
      desc: '为物流企业提供业务真实性核验，数据增信，并形成征信额度和优惠利率。',
      icon: '',
      type: 'credit',
    },
    {
      title: '智能客服',
      desc: '实现24/7在线客服，推荐解决方案，提高处理效率。',
      icon: '',
      type: 'service',
    },
  ]
  return (
    <div className="h-full container mx-auto max-w-3xl flex flex-col justify-between">
      <div className='flex-1 flex flex-col items-center justify-center'>
        <p className='flex items-center text-2xl font-bold mb-10 gap-4'>
          <Image src={Icon} alt='icon' />
          <span className='font-semibold text-5xl'>物流行业大模型</span>
        </p>
        <div className='grid grid-cols-2'>
          {list.map((item, index) => (
            <Card key={index} {...item} />))}
        </div>
      </div>
      <p className='text-center mb-10'>COPYRIGHT @ 2023-2025 湖北XXX有限公司 ALL RIGHT RERSERVED</p>
    </div>
  )
}

export default React.memo(App)
