import Nature from "../Nature"


const natureImages = [
  {
    title: "Mountain",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
  },
  {
    title: "Forest",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
  },
  {
    title: "Lake",
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1200",
  },
  {
    title: "Ocean",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200",
  },
  {
    title: "Waterfall",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?q=80&w=1200",
  },
];



export default function App() {
  
  return (
    <>
      {natureImages.map((item) => (
       <Nature
          key={item.title}
          natureType={item}
        />
        ))}
      
    </>
  );
}










