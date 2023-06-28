import { useState } from 'react';

interface OptionProps {
  optionId: string;
  name: string;
}

interface InputSelectProps {
  id: string;
  options: OptionProps[];
}

export function InputSelect({ options, id }: InputSelectProps) {
  const [currentFilter, setCurrentFilter] = useState<OptionProps | undefined>();
  const [isDropdownOpened, setIsDropDownOpened] = useState(false);

  return (
    <div className="min-w-[128px] relative">
      <div>
        <div
          className={`bg-white border-[1px] w-full px-[15px] py-[7px] font-DM font-semibold text-gray-primary-gray text-sm text-center inline-flex items-center border-gray-primary-gray ${
            isDropdownOpened
              ? 'rounded-[10px] rounded-b-none border-b-0'
              : 'rounded-[10px]'
          }`}
          id={id}
        >
          {currentFilter ? (
            <div
              key={currentFilter?.optionId}
              className="w-full flex items-center justify-between gap-2 cursor-default "
            >
              {currentFilter?.name}
              <button
                className="cursor-pointer"
                type="button"
                onClick={() => {
                  setCurrentFilter(undefined);
                }}
              >
                <img
                  src="/icons/close-icon.svg"
                  className={`w-[14px] `}
                  alt="close icon"
                />
              </button>
            </div>
          ) : (
            <div
              key="generic-option"
              className="w-full flex items-center justify-between gap-2 cursor-default "
            >
              Selecione...
              <button
                onClick={() => {
                  setIsDropDownOpened(!isDropdownOpened);
                }}
              >
                <img
                  src="/icons/arrow-icon.png"
                  className={`w-[10px] ${isDropdownOpened ? 'rotate-180' : ''}`}
                  alt="arrow icon"
                />
              </button>
            </div>
          )}
        </div>
        {isDropdownOpened && (
          <div
            className={`w-full z-10 bg-white border-[1px] border-t-0 border-gray-primary-gray shadow-[0_4px_20px_-10px_rgba(0,0,0,0.25)] divide-y divide-gray-100 block absolute ${
              isDropdownOpened
                ? 'rounded-[10px] rounded-t-none'
                : 'rounded-[10px]'
            }`}
          >
            <ul className="px-[15px] py-[7px]">
              {options.map(({ optionId, name }) => {
                return (
                  <li key={optionId}>
                    <div className="flex cursor-pointer items-center hover:overflow-hidden  rounded-[14px]">
                      <button
                        onClick={() => {
                          setCurrentFilter({ optionId, name });
                          setIsDropDownOpened(false);
                        }}
                        className="w-full text-sm text-gray-primary-gray font-DM font-semibold border-t-[1px] border-gray-options-gray"
                      >
                        {name}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
