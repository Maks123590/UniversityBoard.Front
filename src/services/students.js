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

export function createStudent(values) {
  return request({
    url: 'Students',
    method: 'POST',
    data: values,
  });
}

export function updateStudent(values) {
  return request({
    url: 'Students',
    method: 'PUT',
    data: values,
  });
}

export async function deleteStudent(id) {
  const result = await request({
    url: `Students/${id}`,
    method: 'DELETE',
  });
  return result;
}

export default getStudents;
