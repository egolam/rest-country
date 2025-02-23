export default async function getCountryDetails(name: string) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name${name}?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
  return res.json();
}
