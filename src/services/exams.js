import request from '../utils/webClient';

export async function getExamsByStudentId(studentId) {
  const result = await request({
    url: `Exams/student/${studentId}`,
    method: 'GET',
  });
  return result;
}

export async function getExamInfo(id) {
  const result = await request({
    url: `Exams/${id}`,
    method: 'GET',
  });
  return result;
}

export function createExamInfo(values) {
  return request({
    url: 'Exams',
    method: 'POST',
    data: values,
  });
}

export function updateExamInfo(values) {
  return request({
    url: 'Exams',
    method: 'PUT',
    data: values,
  });
}

export async function deleteExamInfo(id) {
  const result = await request({
    url: `Exams/${id}`,
    method: 'DELETE',
  });
  return result;
}

export default getExamsByStudentId;
