import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn, getSetSessionFn } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const { sessionId, user } = getGetInfoFn()(request)
  try {
    const { data }: any = await getClientFn().getConversations(user)
    return NextResponse.json(data, {
      headers: getSetSessionFn()(sessionId),
    })
  }
  catch (error: any) {
    return NextResponse.json({
      data: [],
      error: error.message,
    })
  }
}
