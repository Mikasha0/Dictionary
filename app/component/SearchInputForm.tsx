import { ChangeEvent, useState } from "react";
import { APIError, APIResponse } from "~/types/api.types";
import ResultTab from "./OutputTab";
  export default function SearchInputForm() {
    const [search, setSearch] = useState<string>("");
    const [valueNotFound, setValueNotFound] = useState("");
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setValueNotFound("");
    }
    const [result, setResult] = useState<APIResponse[]>([]) ;
      const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        if (search.trim() !== "") {
          const res = await fetch(
            `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
          );
          if (res.status === 404) {
            const searchedValue:APIError = await res.json();
            setValueNotFound(searchedValue.message);
            setResult([])
          } else {
            const searchResult:APIResponse[] = await res.json();
            setValueNotFound("");
            setResult(searchResult);
          }
        } else {
          setValueNotFound("");
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        <div className="flex justify-center h-[90%] mt-[3rem]">
          <form className="w-[70%]" onSubmit={handleSubmit}>
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                value={search}
                onChange={handleChange}
                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search here"
              />
            </div>
            {valueNotFound !== "" && (
              <p className="text-red-400">{valueNotFound}</p>
            )}
          </form>
        </div>
        <ResultTab result={result}/>
      </>
    );
  }
