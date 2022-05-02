export class BaseResponseModel {
  message?: string | null;
  success?: boolean;
  data?: unknown;
}

export class BaseQueryModel {
  page?: number | null = 1;
  limit?: number | null = 10;
}

export class BaseDataModel {
  id: number | null = null;
  createdDate: string | null = null;
  createdTime: string | null = null;
  createdBy: string | null = null;
  updatedDate: string | null = null;
  updatedTime: string | null = null;
  updatedBy: string | null = null;
}
