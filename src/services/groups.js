import request from '../utils/webClient';

export async function getGroups() {
  const result = await request({
    url: 'Groups',
    method: 'GET',
  });
  return result;
}

export async function getGroupt(id) {
  const result = await request({
    url: `Groups/${id}`,
    method: 'GET',
  });
  return result;
}

export function createGroup(values) {
  return request({
    url: 'Groups',
    method: 'POST',
    data: values,
  });
}

export function updateGroup(values) {
  return request({
    url: 'Groups',
    method: 'PUT',
    data: values,
  });
}

export async function deleteGroup(id) {
  const result = await request({
    url: `Groups/${id}`,
    method: 'DELETE',
  });
  return result;
}

export default getGroups;
