import uniqid from 'uniqid';
import { ADD_MESSAGE } from '../actions/chatActions';

const messagesData = [
  {
    id: '156',
    text: 'Coucou les kelvin',
    author: 'Eden',
  },
  {
    id: '140',
    text: 'Encore là vous ?',
    author: 'Opale',
  },
  {
    id: '2345',
    text: 'Eden, caline moi !',
    author: 'Opale',
  },
  {
    id: '34567',
    text: 'Je proviens du store',
    author: 'System',
  },
];

export const initialState = {
  messages: messagesData,
};

function chatReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: uniqid(),
            text: action.payload,
            author: 'Eden',
          },
        ],
      };
    }
    default:
      return state;
  }
}

export default chatReducer;
