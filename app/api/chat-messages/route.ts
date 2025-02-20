import { type NextRequest } from 'next/server'
import { getClientFn, getGetInfoFn } from '@/app/api/utils/common'
export async function POST(request: NextRequest) {
  const body = await request.json()
  const {
    inputs,
    query,
    files,
    conversation_id: conversationId,
    response_mode: responseMode,
  } = body
  const { user } = getGetInfoFn()(request)
  const res = await getClientFn().createChatMessage(inputs, query, user, responseMode, conversationId, files)
  return new Response(res.data as any)
}
