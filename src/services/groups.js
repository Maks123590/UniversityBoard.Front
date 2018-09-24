import request from '../utils/webClient';

export async function getGroups() {
  const result = await request({
    url: 'Groups',
    method: 'GET',
  });
  return result;
}

export default getGroups;
