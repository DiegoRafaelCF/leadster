import { InfoMockInterface } from '@/Interfaces/infosMock';
import { IoMdClose } from 'react-icons/io';
import { DownloadButton } from '../DownloadButton';

interface ModalProps {
  data: InfoMockInterface;
  isOpen: boolean;
  closeModal: () => void;
}

export function VideoModal({ data, isOpen, closeModal }: ModalProps) {
  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="w-full h-full max-w-[500px] max-h-[667px] flex flex-col rounded-lg bg-white border-t-blue-secondary-blue border-t-[4px]">
          {/* The first tag below involves part of the modal where the video title is */}
          <div className="flex flex-col items-center justify-center pt-2 pb-8">
            <button
              className="w-full px-2 flex justify-end"
              onClick={() => closeModal()}
            >
              <IoMdClose className="text-gray-primary-gray" size={20} />
            </button>
            <div className="w-[300px] font-PJ font-bold text-gray-primary-gray text-xl">
              <strong className="text-blue-secondary-blue">Webnar:</strong>{' '}
              {data.title}
            </div>
          </div>
          {/* The iframe tag is responsible for taking care of how the video works */}
          <iframe
            className="w-full h-[280px]"
            src={data.url}
            title="YouTube video player"
            allow="web-share"
            allowFullScreen
          />
          {/* In the tag below is the description part and the downloads part */}
          <div className="p-6 flex flex-col gap-4 font-PJ text-sm">
            <div className="flex flex-col gap-2">
              <span
                className="w-full pb-2 font-bold  text-gray-primary-gray 
                 border-b-gray-secondary-gray-gray border-b-[2px]"
              >
                Descrição
              </span>
              <p className="text-justify font-regular text-gray-option-gray">
                {data.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <span
                className="w-full pb-2 font-bold  text-gray-primary-gray 
                 border-b-gray-secondary-gray-gray border-b-[2px]"
              >
                Downloads
              </span>
              <div className="flex flex-wrap gap-1">
                <DownloadButton
                  type="xls"
                  title="Spreadsheet"
                  path="/files/spreadsheet.xlsx"
                />
                <DownloadButton
                  type="doc"
                  title="Document"
                  path="/files/document.docx"
                />
                <DownloadButton
                  type="ppt"
                  title="Presentation"
                  path="/files/presentation.pptx"
                />
                <div className="min-[1201px]:hidden">
                  <DownloadButton
                    type="zip"
                    title="Folder"
                    path="/files/folder.zip"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-[1200px]:hidden absolute p-5 bottom-0 left-0 flex flex-col bg-white gap-4">
          <DownloadButton
            type="xls"
            title="Spreadsheet"
            path="/files/spreadsheet.xlsx"
          />
          <DownloadButton
            type="doc"
            title="Document"
            path="/files/document.docx"
          />
          <DownloadButton
            type="ppt"
            title="Presentation"
            path="/files/presentation.pptx"
          />
          <DownloadButton type="zip" title="Folder" path="/files/folder.zip" />
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-blue-secondary-blue opacity-25" />
    </>
  ) : null;
}
