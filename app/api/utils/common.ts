import { type NextRequest } from 'next/server'
import { ChatClient } from 'dify-client'
import { v4 } from 'uuid'
import { API_KEY, API_KEY2, API_KEY3, API_KEY4, API_URL, APP_ID, APP_ID2, APP_ID3, APP_ID4 } from '@/config'

const userPrefix = `user_${APP_ID}:`

export const getInfo = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id')?.value || v4()
  const user = userPrefix + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession = (sessionId: string) => {
  return { 'Set-Cookie': `session_id=${sessionId}` }
}

export const client = new ChatClient(API_KEY, API_URL || undefined)

const userPrefix2 = `user_${APP_ID2}:`

export const getInfo2 = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id2')?.value || v4()
  const user = userPrefix2 + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession2 = (sessionId: string) => {
  console.log('sessionId', sessionId)
  return { 'Set-Cookie': `session_id2=${sessionId}` }
}

export const client2 = new ChatClient(API_KEY2, API_URL || undefined)

const userPrefix3 = `user_${APP_ID3}:`

export const getInfo3 = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id3')?.value || v4()
  const user = userPrefix3 + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession3 = (sessionId: string) => {
  return { 'Set-Cookie': `session_id3=${sessionId}` }
}

export const client3 = new ChatClient(API_KEY3, API_URL || undefined)

const userPrefix4 = `user_${APP_ID4}:`

export const getInfo4 = (request: NextRequest) => {
  const sessionId = request.cookies.get('session_id4')?.value || v4()
  const user = userPrefix4 + sessionId
  return {
    sessionId,
    user,
  }
}

export const setSession4 = (sessionId: string) => {
  return { 'Set-Cookie': `session_id4=${sessionId}` }
}

export const client4 = new ChatClient(API_KEY4, API_URL || undefined)

type MappingType = 'booking' | 'transport' | 'credit' | 'service'

const mapping: Record<MappingType, { userPrefix: string; getInfo: (request: NextRequest) => { sessionId: any; user: string }; setSession: (sessionId: string) => { 'Set-Cookie': string }; client: any }> = {
  booking: {
    userPrefix,
    getInfo,
    setSession,
    client,
  },
  transport: {
    userPrefix: userPrefix2,
    getInfo: getInfo2,
    setSession: setSession2,
    client: client2,
  },
  credit: {
    userPrefix: userPrefix3,
    getInfo: getInfo3,
    setSession: setSession3,
    client: client3,
  },
  service: {
    userPrefix: userPrefix4,
    getInfo: getInfo4,
    setSession: setSession4,
    client: client4,
  },
}

export const getGetInfoFn = (type: any) => mapping[type as MappingType || 'booking'].getInfo
export const getSetSessionFn = (type: any) => mapping[type as MappingType || 'booking'].setSession
export const getUserPrefixFn = (type: any) => mapping[type as MappingType || 'booking'].userPrefix
export const getClientFn = (type: any) => mapping[type as MappingType || 'booking'].client
