import { useQuery } from "@tanstack/react-query";

export default function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["character"],
    queryFn: async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      return res.json();
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div>
      <h1>Hello</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}