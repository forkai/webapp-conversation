import { type NextRequest } from 'next/server'
import { getClientFn, getGetInfoFn } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const formData = await request.formData()
    const { user } = getGetInfoFn(body.type)(request)
    formData.append('user', user)
    const res = await getClientFn(body.type).fileUpload(formData)
    return new Response(res.data.id as any)
  }
  catch (e: any) {
    return new Response(e.message)
  }
}
