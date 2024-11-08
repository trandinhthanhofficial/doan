export const setAccessTokenToLS = (access_token: string) => {
  localStorage.setItem("access_token", access_token);
};
export const getAccessTokenFromLS = () =>
  localStorage.getItem("access_token") || "";

export const getProfileFromLS = () => {
  const result = localStorage.getItem("profile");
  return result ? JSON.parse(result) : null;
};
