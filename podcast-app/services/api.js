export const fetchPreview = async () => {
  const response = await fetch('https://podcast-api.netlify.app');
  if (!response.ok) throw new Error('Failed to fetch preview data');
  return response.json();
};

export const fetchGenre = async (id) => {
  const response = await fetch(`https://podcast-api.netlify.app/genre/${id}`);
  if (!response.ok) throw new Error('Failed to fetch genre data');
  return response.json();
};

export const fetchShow = async (id) => {
  const response = await fetch(`https://podcast-api.netlify.app/id/${id}`);
  if (!response.ok) throw new Error(`Failed to fetch show data for id ${id}`);
  return response.json();
};


export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
