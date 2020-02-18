export type ExceptionInfo = {
  stack: string;
  timestamp: Date;
};

export type ExceptionQueryOpts = {
  timestampOrder?: 'asc' | 'desc';
};

export interface ExceptionStore {
  store(exceptionInfo: ExceptionInfo): Promise<void>;
  get(opts?: ExceptionQueryOpts): Promise<ExceptionInfo[]>;
}
