import Link from 'next/link'
import React from 'react'
import type { StaticImageData } from 'next/image'
import Image from 'next/image'
import SideBar from './SideBar'
import Icon from '@/public/image/roboticon.png'
import railway from '@/public/image/railway.png'
import money from '@/public/image/money.png'
import customer from '@/public/image/customer.png'
import logistics from '@/public/image/logistics.png'

type CardProps = {
  title: string
  desc: string
  icon: StaticImageData
  type: string
}

const Card: React.FC<CardProps> = ({ title, desc, icon, type }) => {
  return (
    <Link href={{ pathname: '/chat', query: { type, title } }}
      className='flex flex-col justify-between shadow-md p-6 m-4 bg-white rounded-lg h-40 hover:shadow-[0_0_0_4px_#2ca5fd] cursor-pointer'>
      <div className='flex items-center justify-between'>
        <div className='text-2xl font-semibold'> {title} </div>
        <Image src={icon} alt='icon' />
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
      icon: railway,
      type: 'booking',
    },
    {
      title: '智运优选',
      desc: '帮助货主、货代选择最佳运输方案,提升物流效率。',
      icon: logistics,
      type: 'transport',
    },
    {
      title: '数字增信',
      desc: '为物流企业提供业务真实性核验，数据增信，并形成征信额度和优惠利率。',
      icon: money,
      type: 'credit',
    },
    {
      title: '智能客服',
      desc: '实现24/7在线客服，数据报告查询，推荐解决方案，提高处理效率',
      icon: customer,
      type: 'service',
    },
  ]
  return (
    <div className="container flex flex-col justify-between h-full max-w-4xl mx-auto">
      <SideBar />
      <div className='flex flex-col items-center justify-center flex-1'>
        <p className='flex items-center gap-4 mb-10 text-2xl font-bold'>
          <Image src={Icon} alt='icon' />
          <span className='text-6xl text-[#0D2855]'>湖北物流行业大模型</span>
        </p>
        <div className='grid grid-cols-2'>
          {list.map((item, index) => (
            <Card key={index} {...item} />))}
        </div>
      </div>
      <p className='mb-10 text-sm text-center'>COPYRIGHT © 2023-2025 湖北供应链物流公共信息服务股份有限公司 ALL RIGHTS RESERVED</p>
    </div>
  )
}

export default React.memo(App)
