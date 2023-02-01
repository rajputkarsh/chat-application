import React, { Dispatch, SetStateAction } from 'react';
import { JsxElement } from "typescript";
import type { Channel } from 'stream-chat';

export  type CHAT_TYPE = 'team' | 'individual';

export  type TeamChannelType = {
  children?: JSX.Element | JSX.Element[], 
  error: Object | null, 
  loading?: boolean | undefined, 
  type?: CHAT_TYPE | undefined,
  isCreating: boolean,
  setCreateType: Dispatch<SetStateAction<string>>,
  setIsCreating: Dispatch<SetStateAction<boolean>>, 
  setIsEditing: Dispatch<SetStateAction<boolean>>, 
  setToggleContainer: Dispatch<SetStateAction<boolean>>,   
}

export  type TeamPreviewType = {
  channel: Channel<StreamChatGenerics>,
  type: CHAT_TYPE,
  setActiveChannel: Dispatch<SetStateAction<Channel>>, 
  setIsCreating: Dispatch<SetStateAction<boolean>>, 
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  setToggleContainer: Dispatch<SetStateAction<boolean>>,  
}

export type AddChannelType = {
  isCreating: boolean,
  setCreateType: Dispatch<SetStateAction<string>>, 
  setIsCreating: Dispatch<SetStateAction<boolean>>, 
  setIsEditing: Dispatch<SetStateAction<boolean>>, 
  setToggleContainer: Dispatch<SetStateAction<boolean>>, 
  type: string     
}

export type ChannelListContainerProps = {
  isCreating: boolean,
  setIsCreating: Dispatch<SetStateAction<boolean>>,
  setCreateType: Dispatch<SetStateAction<string>>,
  setIsEditing: Dispatch<SetStateAction<boolean>>,  
}

export type ChannelContainerProps = {
  isCreating: boolean,
  setIsCreating: Dispatch<SetStateAction<boolean>>,
  isEditing: boolean,
  setIsEditing: Dispatch<SetStateAction<boolean>>,
  createType: string,
}

export type CreateChannelType = {
  createType: string,
  setIsCreating: Dispatch<SetStateAction<boolean>>
}

export type CloseCreateChannelType = {
  setIsEditing?: Dispatch<SetStateAction<boolean>>,
  setIsCreating?: Dispatch<SetStateAction<boolean>>
}

export type ChannelNameInputType = {
  channelName: string
  setChannelName: Dispatch<SetStateAction<string>>
}

// response interfaces
type SignupResponse ={
  token: String,
  userId: String,
  hashedPassword: String,
  fullName: String,
}