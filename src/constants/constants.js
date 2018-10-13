const BaseUrl = 'https://localhost:5001/api/';

export const attestationTypes = [
  {
    key: 1,
    value: 'Зачет',
  },
  {
    key: 2,
    value: 'Экзамен',
  },
];

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

export const formModes = {
  new: 0,
  edit: 1,
};

export default BaseUrl;
