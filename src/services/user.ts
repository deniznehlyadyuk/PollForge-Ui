export const authorizedEndpoint = async () => {
  return await fetch(`/authorized-endpoint`, {
    method: 'GET',
    credentials: 'include',
  })
}

export const refreshToken = async () => {
  return await fetch(`/auth/refresh-token`, {
    method: 'POST',
    credentials: 'include',
  })
}