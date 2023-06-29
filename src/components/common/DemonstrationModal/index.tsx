import { IoMdClose } from 'react-icons/io';

interface ModalProps {
  isOpen: boolean;
  closeModal: () => void;
}

export function DemonstrationModal({ isOpen, closeModal }: ModalProps) {
  return isOpen ? (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="absolute w-[400px] h-[400px] max-[600px]:w-full max-[600px]:inset-0 max-[600px]:my-auto right-5 bottom-10 flex flex-col rounded-lg bg-white overflow-hidden">
          <div className="h-[20%] flex items-center justify-end p-5 bg-blue-primary-blue">
            <button
              className="flex p-1 border-b-gray-secondary-gray border-2 rounded-[100%]"
              onClick={() => closeModal()}
            >
              <IoMdClose size={20} color="#fff" />
            </button>
          </div>
          <div className="h-[80%] flex items-center justify-center ">
            <span className="font-PJ text-4xl text-blue-secondary-blue">
              <strong className="text-gray-primary-gray ">Em breve</strong> ...
            </span>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-blue-secondary-blue opacity-25" />
    </>
  ) : null;
}
