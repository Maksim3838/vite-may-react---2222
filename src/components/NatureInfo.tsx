
import type { Nature } from "../components/type/Nature"

interface NatureInfoProps {
    nature: Nature;
}

export default function NatureInfo({nature}:NatureInfoProps) {
    return(
        <>
            <h1>{nature.title }</h1>
            <img
                src={nature.image}
                alt={nature.title}
                width={300}/>
        </>
    )
 }
 