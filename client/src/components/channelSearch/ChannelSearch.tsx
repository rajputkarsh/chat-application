
import { ERROR } from "../../constants";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useChatContext } from "stream-chat-react";

import { SearchIcon } from "../../assets/SearchIcon";

function ChannelSearch() {

  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const getChannels = async (value: string) => {
    try{
      throw "";
    } catch(error){
      toast.error(ERROR.COULD_NOT_SEARCH_QUERY)
      setQuery("");
    }
  }

  const handleQuerySearch = (e:  React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setLoading(true);
    setQuery(e.target.value);
    getChannels(e.target.value);
  }

  return (
    <div className="channel-search__container">
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input_icon">
          <SearchIcon />
        </div>
        <input className="channel-search__input__text" placeholder="Search" type="text" value={query} onChange={handleQuerySearch} />
      </div>
    </div>
  )
}

export default ChannelSearch