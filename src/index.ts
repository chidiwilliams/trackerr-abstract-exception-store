export type ExceptionInfo = {
  stack: string;
  timestamp: Date;
};

export interface ExceptionStore {
  Store(exceptionInfo: ExceptionInfo): Promise<void>;
  Get(): Promise<ExceptionInfo[]>;
}
