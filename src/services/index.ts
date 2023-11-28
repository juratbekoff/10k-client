import axios from "axios";

// const baseURL_LOCAL = "http://localhost:3001/api/v1";
const baseURL_PROD = "https://api.10k.uz/api/v1";

const api = axios.create({
  baseURL: baseURL_PROD,
});

export const createView = async (
  postId: number,
  streamId: number,
  Ip: string
) => {
  return await api.post("/views", {
    postId,
    streamId,
    Ip,
  });
};

export const generateCaptcha = async (Ip: string) => {
  return await api.post("/captcha", {
    Ip,
  });
};

export const verifyCaptcha = async (answer: number, Ip: string) => {
  return api.post("/captcha/verify", {
    answer,
    Ip,
  });
};

export const getPost = async (streamId: number, postId: number) => {
  return await api.get(`/posts/stream?streamId=${streamId}&postId=${postId}`);
};

export const getIP = async () => {
  return await api.get(`https://api.ipify.org/?format=json`);
};
