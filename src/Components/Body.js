import React, { useState } from "react";
import YoutubeVideoCard from "./YoutubeVideoCard";

const Body = () => {
  const [youtubeLink, setYoutubeLink] = useState("");

  const changeHandle=(e)=>{
    setYoutubeLink(e.target.value);
  }

  const handleSearch=()=>{
    console.log("Searching for: ",youtubeLink);
  }

  return (
    <div>
      <div className="flex justify-center content-center ">
        <div className="mt-32">
          <input onChange={changeHandle} value={youtubeLink} className="border-2 rounded-full px-4 min-w-[40vw] h-12 outline-none" placeholder="Paste your playlist link here" type="text" name="youtube link" id="" />
          <button onClick={handleSearch} className="border-2 bg-blue-400 text-cyan-100 px-4 py-2" type="button">ADD</button>
        </div>
      </div>
      <div className="justify-center flex mt-32">
        <YoutubeVideoCard/>
      </div>
    </div>
  );
};

export default Body;
