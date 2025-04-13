'use server'
import { NextApiRequest, NextApiResponse } from 'next';

import ChatFetch from "../../../components/chat/ChatFetch"

export async function handleSubmit(message: string) {

  const response = await ChatFetch({} as NextApiResponse, {} as NextApiRequest, message);

  const responseText = response.candidates[0].content.parts[0].text

  const aiResponse = responseText

  return aiResponse

}