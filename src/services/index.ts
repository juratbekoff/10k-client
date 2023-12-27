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

export const getPostByStream = async (streamId: number, postId: number) => {
  return await api.get(`/posts/stream?streamId=${streamId}&postId=${postId}`);
};

export const getPostById = async (postId: number) => {
  return await api.get(`/posts/common/${postId}`);
};

export const getPostsList = async (page: number = 1) => {
  return await api.get(`/posts/user?page=${page}&limit=20&role=user`);
};

export const getIP = async () => {
  return await api.get(`https://api.ipify.org/?format=json`);
};
