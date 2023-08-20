import { LoaderArgs } from "@remix-run/node";

export const getSearchedName = async ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const name = url.searchParams.get("search");

  if (!name || name.trim() === "") {
    // If name parameter is missing or empty, return a response indicating no action
    return new Response("No search parameter provided", { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${name}`
    );
    const searchedName = await res.json();
    console.log(searchedName);
    return searchedName;
  } catch (error) {
    console.log(error);
    return new Response("API request error", { status: 500 });
  }
};
