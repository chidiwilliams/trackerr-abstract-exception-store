export type ExceptionInfo = {
  stack: string;
  timestamp: Date;
};

export type ExceptionGetQueryOpts = {
  query?: string;
  timestampOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
};

export type ExceptionCountQueryOpts = {
  query?: string;
};

export interface ExceptionStore {
  store(exceptionInfo: ExceptionInfo): Promise<void>;
  get(opts?: ExceptionGetQueryOpts): Promise<ExceptionInfo[]>;
  count(opts?: ExceptionCountQueryOpts): Promise<number>;
}
