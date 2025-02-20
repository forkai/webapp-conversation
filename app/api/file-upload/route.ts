import { type NextRequest } from 'next/server'
import { getClientFn, getGetInfoFn } from '@/app/api/utils/common'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const { user } = getGetInfoFn()(request)
    formData.append('user', user)
    const res = await getClientFn().fileUpload(formData)
    return new Response(res.data.id as any)
  }
  catch (e: any) {
    return new Response(e.message)
  }
}
