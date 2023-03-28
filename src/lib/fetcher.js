const baseUrl = "13.212.68.212:5001/api/v1";
const protocol = process.env.REACT_APP_API_PROTOCOL || "http";

const fetcher = async (route, options = {}) => {
  let url = new URL(`${protocol}://${baseUrl}/${route}`);
  const method = options.method || "get";

  if (method === "get") {
    Object.keys(options).forEach((key) =>
      url.searchParams.append(key, options[key])
    );
  }

  console.log("fetching ....", url);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMDdjMzdhYWEtZTljZC00NzhhLTk1ODgtNmU3NDVkYjg1ZmQwIiwicGhvbmVfbnVtYmVyIjoiMDE3OTg5ODQ0NDQiLCJhY2NvdW50X3R5cGUiOjIsImV4cCI6MTY3OTk5NTQ1MX0.-WB0jp44z5Pd8np8XGWn1fv9kXSLYNYiSrEGWMPaXWU`,
      "Content-Type": "application/json; charset=utf-8",
    },
    ...options,
  });

  return await response.json();
};

export default fetcher;
