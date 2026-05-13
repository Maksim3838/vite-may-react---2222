import Nature from "../Nature"


const natureImages = [
  {
    title: "Емілія",
    image: "imagess/1.jpg"
     
  },
      {
    title: "Ocean",
    image:
      "imagess/3.jpg"
  },
    {
    title: "Waterfall",
    image:
     "imagess/5.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/6.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/7.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/8.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/9.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/10.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/11.jpg"
  },
    {
    title: "Waterfall",
    image:
     "imagess/13.jpg"
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










