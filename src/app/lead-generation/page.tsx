'use client';

import { Card } from '@/components/common/Card';
import { Pagination } from '@/components/common/Pagination';
import { useEffect, useReducer } from 'react';
import {
  LeadGenerationDefaultValues,
  LeadGenerationReducer,
} from '@/reducers/leadGenerationReduce';
import { VideoModal } from '@/components/common/VideoModal';
import infosMock from '../../infos-mock.json';

export default function LeadGeneration() {
  document.title = 'Leadster - Geração de Leads';
  const [dataReducer, dispatch] = useReducer(
    LeadGenerationReducer,
    LeadGenerationDefaultValues
  );

  // This function works by getting a specific number of card information to show it to the user
  const getPartInfos = (page: number, total = 9) => {
    const startPosition = (page - 1) * 9;
    const endPosition =
      startPosition + total < infosMock.length
        ? startPosition + total
        : infosMock.length;

    const output = infosMock.slice(startPosition, endPosition);

    return output;
  };

  const setPage = (page: number) =>
    dispatch({ type: 'SET_CURRENT_PAGE', currentPage: page });

  useEffect(() => {
    const aux = getPartInfos(dataReducer.currentPage);
    dispatch({ type: 'SET_INFOS', infos: aux });

    // This part works by moving the page up and down to the top of the card division
    const elem = document.getElementById('anchor');
    if (elem) elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [dataReducer.currentPage]);

  return (
    <main
      id="anchor"
      className="w-full flex flex-col items-center justify-center"
    >
      <VideoModal
        isOpen={dataReducer.isModalOpen}
        data={dataReducer.currentInfo}
        closeModal={() => {
          dispatch({ type: 'SET_IS_MODAL_OPEN', isModalOpen: false });
        }}
      />
      {/* the cards will loaded when infos length is greater than 0 */}
      {dataReducer.infos.length > 0 && (
        <>
          {/* Card division */}
          <div className="w-[90%] max-w-[960px] flex items-center justify-center py-14 flex-wrap gap-6">
            {dataReducer.infos.map((info) => {
              return (
                <Card
                  key={info.id}
                  title={info.title}
                  thumbnail={info.thumbnail}
                  onClick={() => {
                    dispatch({ type: 'SET_CURRENT_INFO', currentInfo: info });
                    dispatch({ type: 'SET_IS_MODAL_OPEN', isModalOpen: true });
                  }}
                />
              );
            })}
          </div>
          {/* Pagination division */}
          <div className="w-full max-w-[960px] flex items-center justify-center pb-16 pt-8 border-t-[2px] flex-wrap gap-6">
            <span className="font-PJ font-bold text-gray-primary-gray text-md">
              Página
            </span>
            <Pagination
              totalCountOfRegisters={infosMock.length}
              registersPerPage={9}
              currentPage={dataReducer.currentPage}
              onPageChange={setPage}
            />
          </div>
        </>
      )}
    </main>
  );
}
