export default async function getCountries(searchQuery: string | null) {
  const res = await fetch(
    `https://restcountries.com/v3.1/${
      !searchQuery ? "all/" : "name/" + searchQuery
    }?fields=flags,name,population,region,capital`
  );

  return res.json();
}
