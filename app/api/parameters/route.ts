import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn, getSetSessionFn } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const { sessionId, user } = getGetInfoFn()(request)
  try {
    const { data } = await getClientFn().getApplicationParameters(user)
    return NextResponse.json(data as object, {
      headers: getSetSessionFn()(sessionId),
    })
  }
  catch (error) {
    return NextResponse.json([])
  }
}
