import { InfoMockInterface } from '@/Interfaces/infosMock';

interface ReduceProps {
  currentInfo: InfoMockInterface;
  infos: InfoMockInterface[];
  isModalOpen: boolean;
  currentPage: number;
}

type Actions =
  | { type: 'SET_CURRENT_INFO'; currentInfo: InfoMockInterface }
  | { type: 'SET_INFOS'; infos: InfoMockInterface[] }
  | { type: 'SET_IS_MODAL_OPEN'; isModalOpen: boolean }
  | { type: 'SET_CURRENT_PAGE'; currentPage: number };

export const LeadGenerationDefaultValues = {
  currentInfo: {
    id: 0,
    title: '',
    description: '',
    url: '',
    thumbnail: '',
  },
  infos: [],
  isModalOpen: false,
  currentPage: 1,
} as ReduceProps;

export const LeadGenerationReducer = (
  state: ReduceProps,
  action: Actions
): ReduceProps => {
  const newState = { ...state };

  switch (action.type) {
    case 'SET_CURRENT_INFO':
      newState.currentInfo = action.currentInfo;
      break;
    case 'SET_INFOS':
      newState.infos = action.infos;
      break;
    case 'SET_IS_MODAL_OPEN':
      newState.isModalOpen = action.isModalOpen;
      break;
    case 'SET_CURRENT_PAGE':
      newState.currentPage = action.currentPage;
      break;
    default:
      break;
  }
  return newState;
};
