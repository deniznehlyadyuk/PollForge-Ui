export const login = async (code: string, codeVerifier: string) => {
  return await fetch(`/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({code, codeVerifier}),
    credentials: 'include'
  })
}