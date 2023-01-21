import React, { Dispatch, SetStateAction } from 'react';
import { JsxElement } from "typescript";
import type { Channel } from 'stream-chat';

export  type CHAT_TYPE = 'team' | 'individual';

export  type TeamChannelType = {
  children?: JSX.Element | JSX.Element[], 
  error: Object | null, 
  loading?: boolean | undefined, 
  type?: CHAT_TYPE | undefined
}

export  type TeamPreviewType = {
  channel: Channel<StreamChatGenerics>,
  type: CHAT_TYPE,
  setActiveChannel: Dispatch<SetStateAction<Channel>>, 
  setIsCreating: Dispatch<SetStateAction<boolean>>, 
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  setToggleContainer: Dispatch<SetStateAction<boolean>>,  
}

type AddChannelType = {
  setCreateType: Dispatch<SetStateAction<string>>, 
  setIsCreating: Dispatch<SetStateAction<boolean>>, 
  setIsEditing: Dispatch<SetStateAction<boolean>>, 
  setToggleContainer: Dispatch<SetStateAction<boolean>>, 
  type: string     
}

type SignupResponse ={
  token: String,
  userId: String,
  hashedPassword: String,
  fullName: String,
}