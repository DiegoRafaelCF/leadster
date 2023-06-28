interface CardProps {
  title: string;
  thumbnail: string;
  onClick: () => void;
}

export function Card({ title, thumbnail, onClick }: CardProps) {
  return (
    <div className="w-[300px]">
      <button
        className="w-full h-[220px] flex flex-col border-none rounded-b-xl font-DM font-semibold text-gray-primary-gray text-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)] hover:text-blue-secondary-blue"
        onClick={onClick}
      >
        <img className="h-[70%] rounded-t-xl" src={thumbnail} alt="thumbnail" />
        <div className="h-[30%] flex items-center justify-center p-4">
          <p className="text-left">{title}</p>
        </div>
      </button>
    </div>
  );
}
