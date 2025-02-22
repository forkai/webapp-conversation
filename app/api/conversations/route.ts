import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn, getSetSessionFn } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams
  const type = queryParams.get('type')
  const { sessionId, user } = getGetInfoFn(type)(request)
  try {
    const { data }: any = await getClientFn(type).getConversations(user)
    return NextResponse.json(data, {
      headers: getSetSessionFn(type)(sessionId),
    })
  }
  catch (error: any) {
    return NextResponse.json({
      data: [],
      error: error.message,
    })
  }
}
