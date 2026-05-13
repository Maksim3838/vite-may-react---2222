import {useState} from "react"
import type { NatureType } from "../components/type/NatureType"

type natureTypeProps = {
    natureType: NatureType;
} 

export default function Nature({ natureType }: natureTypeProps) {
     const [count, setCount] = useState<number>(0);

  const hendelClic = () => {
    setCount((prev)=>prev+1);
  };
  const resetClick = () => {
      setCount(0);
    };
    
    const minClick = () => {
        setCount((prev) => { if (prev > 0) { return prev - 1 }; return prev} );
    }
    return (
        <>
            <h1>{natureType.title}</h1>
            <img src={natureType.image} alt={natureType.title} width={300} />
            <button onClick={hendelClic}>cliсk</button>
            <span>{count}</span>
            <button onClick={minClick}>Min</button>
      <button onClick={resetClick}>Reset</button>
        </>
    )
}