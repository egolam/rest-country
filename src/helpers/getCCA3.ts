export default async function getBorders() {
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=cca3,name`);
  return res.json();
}
