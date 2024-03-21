export const getAccessToken =
  typeof window !== 'undefined' && localStorage != null
    ? localStorage.getItem('usertoken')?.toString()
    : '';
