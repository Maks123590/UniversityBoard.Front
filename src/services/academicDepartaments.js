import request from '../utils/webClient';

export async function getDepartaments() {
  const result = await request({
    url: 'AcademicDepartaments',
    method: 'GET',
  });
  return result;
}

export default getDepartaments;
