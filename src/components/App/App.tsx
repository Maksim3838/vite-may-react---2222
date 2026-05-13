import Nature from "../Nature"


const natureImages = [
  {
    title: "Mountain",
    image: "imagess/1.jpg"
      // "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
  },
  {
    title: "Forest",
    image:
      "imagess/1.jpg"
  },
  {
    title: "Lake",
    image:
     "imagess/2.jpg"
  },
  {
    title: "Ocean",
    image:
      "imagess/3.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/4.jpg"
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
     "imagess/12.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/13.jpg"
  },
  {
    title: "Waterfall",
    image:
     "imagess/14.jpg"
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










