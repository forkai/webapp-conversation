import { type NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getClientFn, getGetInfoFn, getSetSessionFn } from '@/app/api/utils/common'

export async function GET(request: NextRequest) {
  const queryParams = request.nextUrl.searchParams
  const type = queryParams.get('type')
  const { sessionId, user } = getGetInfoFn(type as any)(request)
  try {
    const { data } = await getClientFn(type as any).getApplicationParameters(user)
    return NextResponse.json(data as object, {
      headers: getSetSessionFn(type as any)(sessionId),
    })
  }
  catch (error) {
    return NextResponse.json([])
  }
}
