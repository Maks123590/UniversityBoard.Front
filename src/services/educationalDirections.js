import request from '../utils/webClient';

export async function getEducationalDirections() {
  const result = await request({
    url: 'EducationalDirections',
    method: 'GET',
  });
  return result;
}

export default getEducationalDirections;
