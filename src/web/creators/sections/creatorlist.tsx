import Image from "next/image";

type Props = {
  creators: Creator[];
  onSelect: (creator: Creator) => void;
};

export default function CreatorsListView({ creators, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {creators.map((creator) => (
        <div
          key={creator.id}
          onClick={() => onSelect(creator)}
          className="cursor-pointer rounded-2xl bg-white p-4 shadow-md transition hover:scale-[1.02]"
        >
          <div className="flex items-center gap-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={creator.logo}
                alt={creator.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{creator.name}</h3>
              <p className="text-sm text-gray-500">{creator.tagline}</p>
            </div>
          </div>
          <div className="mt-3 text-sm text-gray-600 flex gap-2">
            <span className="px-2 py-0.5 bg-gray-100 rounded">{creator.type}</span>
            <span className="px-2 py-0.5 bg-gray-100 rounded">{creator.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
