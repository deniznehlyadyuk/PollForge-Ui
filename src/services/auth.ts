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

export const refreshToken = async () => {
  return await fetch(`/auth/refresh-token`, {
    method: 'POST',
    credentials: 'include',
  })
}

export const me = async () => {
  return await fetch(`/auth/me`, {
    method: 'GET',
    credentials: 'include',
  })
}

export const logout = async () => {
  return await fetch(`/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  })
}