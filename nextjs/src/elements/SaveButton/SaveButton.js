import Link from "next/link";
import { useEffect, useState } from "react";

export default function SaveButton({text, id}) {
    const [artId, setArtId] = useState()
    useEffect(() => {
        setArtId(id)
    },[])
    const addItem = () => {
        localStorage.setItem(`article ${artId}`, JSON.stringify(artId));
    }
  return (
    <div 
        className="mp-0" 
        onClick={addItem}
        style={{cursor: 'pointer'}}
    >
          {text}
    </div>
  );
}
