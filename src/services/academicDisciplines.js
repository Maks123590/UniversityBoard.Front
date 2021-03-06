import request from '../utils/webClient';

export async function getDisciplines(groupId) {
  const result = await request({
    url: `AcademicDisciplines/byGroup/${groupId}`,
    method: 'GET',
  });
  return result;
}

export async function getByAcademicDepartament(code) {
  const result = await request({
    url: `AcademicDisciplines/byAcademicDepartament/${code}`,
    method: 'GET',
  });
  return result;
}

export default getDisciplines;
