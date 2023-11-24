import { useMutation, useQuery } from "@tanstack/react-query";
import { queryKeys } from "./queryKeys";
import { createView, getCaptcha, getPost, verifyCaptcha } from "@/services";

export interface postProps {
  postId: number;
  streamId: number;
}

export interface captchaProps {
  message: string;
  math_problem: string;
  Ip: string;
}

export const usGetPostById = (data: postProps) => {
  return useQuery({
    queryKey: [queryKeys.GET_POST_BY_ID],
    queryFn: () => {
      return getPost(data.streamId, data.postId);
    },
    retry: 1,
    refetchOnWindowFocus: false,
  });
};

export const useGetCaptcha = () => {
  return useQuery({
    queryKey: [queryKeys.GET_CAPTCHA],
    queryFn: () => {
      return getCaptcha();
    },
    refetchOnWindowFocus: false,
  });
};

export const useVerifyCaptcha = () => {
  return useMutation({
    mutationKey: [queryKeys.VERIFY_CAPTCHA],
    mutationFn: (answer: number) => {
      return verifyCaptcha(answer);
    },
  });
};

export const useCreateView = () => {
  return useMutation({
    mutationKey: [queryKeys.CREATE_VIEW],
    mutationFn: (data: postProps) => {
      return createView(data.postId, data.streamId);
    },
  });
};
