import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn } from '@/app/api/utils/common'

export async function POST(request: NextRequest, { params }: {
  params: { conversationId: string }
}) {
  const body = await request.json()
  const {
    auto_generate,
    name,
  } = body
  const { conversationId } = params
  const { user } = getGetInfoFn()(request)

  // auto generate name
  const { data } = await getClientFn().renameConversation(conversationId, name, user, auto_generate)
  return NextResponse.json(data)
}
