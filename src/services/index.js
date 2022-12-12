export async function timeFetcher() {
  const response = await fetch(
    `https://api.ipgeolocation.io/timezone?apiKey=8ee02cd846b84e06848a0cb19156fe16`,
  );
  const data = await response.json();

  return data;
}

export async function quoteFetcher() {
  const random = Math.floor(Math.random() * 1643);

  const response = await fetch(`https://type.fit/api/quotes`);
  const data = await response.json();

  return data[random];
}
