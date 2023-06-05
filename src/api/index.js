export async function postRecord(data) {
  const upload = await fetch('http://localhost:3004/records', {
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
  const upload = await fetch('http://localhost:3004/records');

  const resp = await upload.json();

  return resp;
}

export async function getFeedbacks() {
  const upload = await fetch('http://localhost:3004/feedbacks');

  const resp = await upload.json();

  return resp;
}

export async function updateRecords(id, data) {
  const upload = await fetch(`http://localhost:3004/records/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  const resp = await upload.json();

  return resp;
}