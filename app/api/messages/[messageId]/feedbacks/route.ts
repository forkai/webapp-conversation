import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn } from '@/app/api/utils/common'

export async function POST(request: NextRequest, { params }: {
  params: { messageId: string }
}) {
  const body = await request.json()
  const {
    rating,
  } = body
  const { messageId } = params
  const { user } = getGetInfoFn()(request)
  const { data } = await getClientFn().messageFeedback(messageId, rating, user)
  return NextResponse.json(data)
}
