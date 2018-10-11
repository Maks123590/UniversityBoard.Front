const BaseUrl = 'https://localhost:5001/api/';

export const attestationTypes = {
  offset: {
    key: 1,
    value: 'Зачет',
  },
  exam: {
    key: 2,
    value: 'Экзамен',
  },
};

export const genderTypes = {
  male: {
    key: 1,
    value: 'мужской',
  },
  female: {
    key: 2,
    value: 'женский',
  },
};

export default BaseUrl;
