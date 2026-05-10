import type {NatureType } from "./type/Nature"



type Props = {
    item: NatureType;
};

export default function NatureInfo({item}: Props) {
    return (
        <><h1>{item.title}</h1>
       
           <div style={{ overflow: "hidden", width: 500 }}>
  <img
    src={item.image}
    alt={item.title}
    style={{
      width: "100%",
      transition: "0.3s",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "scale(1.2)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "scale(1)";
    }}
  />
</div>
        </>
        
    )
}