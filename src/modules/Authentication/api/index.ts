import request from "@/utils/axios";
import { BaseResponseModel } from "@/modules/BaseModel";

export const logIn = (data: unknown): Promise<BaseResponseModel> =>
  request({
    url: `/login`,
    method: "POST",
    data,
  });

export const register = (data: unknown): Promise<BaseResponseModel> =>
  request({
    url: `/register`,
    method: "POST",
    data,
  });
