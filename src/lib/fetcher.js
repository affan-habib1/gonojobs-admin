const baseUrl = "localhost:5000";
const protocol = process.env.REACT_APP_API_PROTOCOL || 'http';

const fetcher = async (route, options = {}) => {

  let url = new URL(`${protocol}://${baseUrl}/${route}`)
  const method = options.method || 'get'

  if(method === 'get') {
    Object.keys(options).forEach(key => url.searchParams.append(key, options[key]))
  }

  console.log('fetching ....', url)

  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJUd3Y5WHdiaTVuT2V2ZGdOOVpGZjc0TnlxTzJqOVFtdWE4cXVUS2t0dnQ4In0.eyJleHAiOjE2NjQ3Njg5MTYsImlhdCI6MTY2NDczMjkxNiwianRpIjoiODc5MWU3ZWEtZTk0Yi00NjcwLTgxZTYtNGJkMTY1OGQ3YWRlIiwiaXNzIjoiaHR0cDovLzE5Mi4xNjguMS4xNzo4MDAyL2F1dGgvcmVhbG1zL0hJUyIsImF1ZCI6WyJyZWFsbS1tYW5hZ2VtZW50IiwiYWNjb3VudCJdLCJzdWIiOiI4MjU1MjFlNC1hYjUzLTQwYWItOGQ5MS1mN2I2NmJjNmVhMGMiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJoaXMiLCJzZXNzaW9uX3N0YXRlIjoiZjg5OWY1MTEtZTI3NC00NGE0LWJhODgtYTAwNDM2NDQ4ZGE3IiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyIqIl0sInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJtaXMtYWRtaW4iLCJvZmZsaW5lX2FjY2VzcyIsImFkbWluIiwidW1hX2F1dGhvcml6YXRpb24iLCJkZWZhdWx0LXJvbGVzLWhpcyJdfSwicmVzb3VyY2VfYWNjZXNzIjp7InJlYWxtLW1hbmFnZW1lbnQiOnsicm9sZXMiOlsibWFuYWdlLXVzZXJzIl19LCJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImVtYWlsIHByb2ZpbGUiLCJzaWQiOiJmODk5ZjUxMS1lMjc0LTQ0YTQtYmE4OC1hMDA0MzY0NDhkYTciLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsIm5hbWUiOiJBZG1pbiBVc2VyIiwicHJlZmVycmVkX3VzZXJuYW1lIjoiYWRtaW4iLCJnaXZlbl9uYW1lIjoiQWRtaW4iLCJmYW1pbHlfbmFtZSI6IlVzZXIiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSJ9.XOlen9XMrMwy6jfuaj25baDaLvR7aMIE1idWsLJuAmx5RKHNi5BHEdETOro45H2SOdISdhq38z-Qp-yX8D6TnF15GkSbaS35ViCRsh8JHmPQ8ZBC6cp764qCKQeZMP8qkPukNYBQTdqmudCLt0_0eB2Z00JpSUADBZX_SfwRBp0gd0nm9mJQKzYKZvKTJbsYTWPc1uVD4C2USDGtrOXgnrIjeOZ1wLOAhYeH_C5NJ3V09YURJ3jPI70EelYaXO_d6TDXoSfye9Xu19jRIctS9KX3WK9XWRT3KTbk_0mdvgv5puujc82YyTV_XbgBzKjb0Ec-enaZU-K24RmEfzctRw`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    ...options
  });

  return await response.json()
}

export default fetcher;