import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn, getSetSessionFn } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams
  const type = queryParams.get('type')
  const { sessionId, user } = getGetInfoFn(type)(request)
  const { searchParams } = new URL(request.url)
  const conversationId = searchParams.get('conversation_id')
  const { data }: any = await getClientFn(type).getConversationMessages(user, conversationId as string)
  return NextResponse.json(data, {
    headers: getSetSessionFn(type)(sessionId),
  })
}
