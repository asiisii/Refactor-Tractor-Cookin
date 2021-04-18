export const postNewData = (body) => {
  return fetch ('http://localhost:3001/api/v1/users', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}