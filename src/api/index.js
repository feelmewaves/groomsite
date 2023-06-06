const url = 'https://mini-working-lasagna.glitch.me'

export async function postRecord(data) {
  const upload = await fetch(`${url}/records`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = await upload.json();

  return resp;
}

export async function postFeedback(data) {
  const upload = await fetch(`${url}/feedbacks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = await upload.json();

  return resp;
}

export async function getRecords() {
  const upload = await fetch(`${url}/records`);

  const resp = await upload.json();

  return resp;
}

export async function getFeedbacks() {
  const upload = await fetch('http://localhost:3004/feedbacks');

  const resp = await upload.json();

  return resp;
}

export async function updateRecords(id, data) {
  const upload = await fetch(`${url}/records/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = await upload.json();

  return resp;
}

export async function deleteFeedback(id) {
  const upload = await fetch(`${url}/feedbacks/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  })

  const resp = await upload.json();

  return resp;
}