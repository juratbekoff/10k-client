import axios from "axios";

// const baseURL_LOCAL = "http://localhost:3001/api/v1";
const baseURL_PROD = "https://api.10k.uz/api/v1";

const api = axios.create({
  baseURL: baseURL_PROD,
});

export const createView = async (postId: number, streamId: number) => {
  return await api.post("/views", {
    postId,
    streamId,
  });
};

export const getCaptcha = async () => {
  return await api.get("/captcha");
};

export const verifyCaptcha = async (answer: number) => {
  return api.post("/captcha/verify", {
    answer,
  });
};

export const getPost = async (streamId: number, postId: number) => {
  return await api.get(`/posts/stream?streamId=${streamId}&postId=${postId}`);
};
