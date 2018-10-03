import request from '../utils/webClient';

export async function getStudents() {
  const result = await request({
    url: 'Students',
    method: 'GET',
  });
  return result;
}

export async function getStudent(id) {
  const result = await request({
    url: `Students/${id}`,
    method: 'GET',
  });
  return result;
}

export default getStudents;
