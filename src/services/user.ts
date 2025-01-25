export const authorizedEndpoint = async () => {
  return await fetch(`/authorized-endpoint`, {
    method: 'GET',
    credentials: 'include',
  })
}