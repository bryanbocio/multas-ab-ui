import { Data } from "../../data";
const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {Data.map((data) => (
          <div
            key={data.id}
            className="w-full rounded-lg p-4 border-[1px] border-gray-200 bg-white flex flex-col gap-2"
          >
            <span className="font-medium">{data.tipo}</span>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
