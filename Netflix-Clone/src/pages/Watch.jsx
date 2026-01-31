import { useParams } from "react-router-dom";

function Watch() {
  const { id } = useParams();

  return (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <h1 className="text-3xl">Playing Movie ID: {id}</h1>
    </div>
  );
}

export default Watch;
