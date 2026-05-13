import Nature from "../Nature"


const natureImages = [
  {
    title: "Емілія",
    image: "imagess/1.jpg"
     
  },
      {
    title: "Прогулянка",
    image:
      "imagess/3.jpg"
  },
    {
    title: "Природа",
    image:
     "imagess/5.jpg"
  },
  {
    title: "Весна",
    image:
     "imagess/6.jpg"
  },
  {
    title: "Марк та Емілія",
    image:
     "imagess/7.jpg"
  },
  {
    title: "Веселощі",
    image:
     "imagess/8.jpg"
  },
  {
    title: "Відпочинок",
    image:
     "imagess/9.jpg"
  },
  {
    title: "Розваги",
    image:
     "imagess/10.jpg"
  },
  
    {
    title: "Атракціон",
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










