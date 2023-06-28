interface CardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

export function Card({ title, thumbnail, onClick }: CardProps) {
  return (
    <div className="w-[300px] relative">
      <button
        className="group w-full h-[230px] flex flex-col border-none rounded-b-xl font-PJ font-bold text-gray-primary-gray text-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)]"
        onClick={onClick}
      >
        {/* This tag below is a thumbnail filter when the mouse hovers over it */}
        <div className="hidden h-[70%] w-full absolute top-0 items-center justify-center z-10 group-hover:flex">
          <div className="w-full h-full bg-blue-secondary-blue opacity-60 rounded-t-xl z-10" />
          <img
            className="absolute z-20"
            src="/icons/play-icon.png"
            alt="play"
          />
        </div>

        <img
          className="h-full w-full rounded-t-xl"
          src={thumbnail}
          alt="thumbnail"
        />
        <div className="h-[30%] flex items-center justify-center p-4 group-hover:text-blue-secondary-blue">
          <p className="text-left">{title}</p>
        </div>
      </button>
    </div>
  );
}
