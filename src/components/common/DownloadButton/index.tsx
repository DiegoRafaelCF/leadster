import { AiOutlineCloudDownload } from 'react-icons/ai';
import useDownloader from 'react-use-downloader';

type downloadType = 'doc' | 'xls' | 'ppt' | 'zip';

interface DownloadButtonProps {
  title: string;
  type: downloadType;
  path: string;
}

export function DownloadButton({ title, type, path }: DownloadButtonProps) {
  const { download } = useDownloader();
  const colorVariantsImage = {
    doc: 'bg-blue-300 text-blue-700',
    xls: 'bg-green-300 text-green-700',
    ppt: 'bg-yellow-200 text-yellow-600',
    zip: 'bg-gray-300 text-gray-500',
  };
  const colorVariantsText = {
    doc: 'bg-blue-200 text-blue-500',
    xls: 'bg-green-200 text-green-500',
    ppt: 'bg-yellow-100 text-yellow-600 opacity-70',
    zip: 'bg-gray-200 text-gray-500 opacity-70',
  };

  return (
    <button
      className="w-fit flex text-"
      onClick={() => download(path, `${title}.${type}`)}
    >
      <div
        className={`py-[6px] px-[6px] flex items-center text-b justify-center ${colorVariantsImage[type]} rounded-tl-md rounded-bl-md`}
      >
        <AiOutlineCloudDownload className="{colorVariants[type]}" size={16} />
      </div>
      <span
        className={`py-[6px] px-[6px] ${colorVariantsText[type]} font-PJ text-xs font-bold rounded-tr-md rounded-br-md`}
      >
        {title}
        {`.${type}`}
      </span>
    </button>
  );
}
