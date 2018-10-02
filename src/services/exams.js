import request from '../utils/webClient';

export async function getExamsByStudentId(studentId) {
  const result = await request({
    url: `Exams/student/${studentId}`,
    method: 'GET',
  });
  return result;
}

export default getExamsByStudentId;
