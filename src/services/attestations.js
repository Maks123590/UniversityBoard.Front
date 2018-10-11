import request from '../utils/webClient';

export async function getAttestations(groupId) {
  const result = await request({
    url: `Attestations/byGroup/${groupId}`,
    method: 'GET',
  });
  return result;
}

export async function getAttestation(id) {
  const result = await request({
    url: `Attestations/${id}`,
    method: 'GET',
  });
  return result;
}

export function createAttestation(values) {
  return request({
    url: 'Attestations',
    method: 'POST',
    data: values,
  });
}

export function updateAttestation(values) {
  return request({
    url: 'Attestations',
    method: 'PUT',
    data: values,
  });
}

export async function deleteAttestation(id) {
  const result = await request({
    url: `Attestations/${id}`,
    method: 'DELETE',
  });
  return result;
}

export default getAttestations;
