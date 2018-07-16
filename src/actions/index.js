const ROOT_URL = 'https://wagon-garage-api.herokuapp.com/:garage/cars';
const ALT_URL = "https://wagon-garage-api.herokuapp.com/cars";

export const FETCH_MOTORCYCLES = 'FETCH_MOTORCYCLES';
export const MOTORCYCLE_CREATED = 'MOTORCYCLE_CREATED';
export const FETCH_MOTORCYCLE = 'FETCH_MOTORCYCLE';
export const MOTORCYCLE_DELETED = 'MOTORCYCLE_DELETED';


export function fetchMotorcycles() {
  const promise = fetch(`${ROOT_URL}`)
    .then(response => response.json());
  return {
    type: FETCH_MOTORCYCLES,
    payload: promise
  };
}


export function createMotorcycle(body, callback) {
const request = fetch(`${ROOT_URL}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);
  return {
    type: MOTORCYCLE_CREATED,
    payload: request
  };
}

export function fetchMotorcycle(id) {
  const promise = fetch(`${ALT_URL}/${id}`)
    .then(response => response.json());
  return {
    type: FETCH_MOTORCYCLE,
    payload: promise
  };
}

export function deleteMotorcycle(id, callback) {
  const request = fetch(`${ALT_URL}/${id}`, {
    method: 'DELETE'
  }).then(response => response.json())
    .then(callback);
  return {
    type: MOTORCYCLE_DELETED,
    payload: request
  };
}
