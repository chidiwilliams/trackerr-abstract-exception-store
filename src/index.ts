export type ExceptionInfo = {
  stack: string;
  timestamp: Date;
};

export type ExceptionGetQueryOpts = {
  timestampOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
};

export type ExceptionCountQueryOpts = {};

export interface ExceptionStore {
  store(exceptionInfo: ExceptionInfo): Promise<void>;
  get(opts?: ExceptionGetQueryOpts): Promise<ExceptionInfo[]>;
  count(opts?: ExceptionCountQueryOpts): Promise<number>;
}
