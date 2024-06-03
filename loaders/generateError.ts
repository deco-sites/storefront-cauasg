
export interface ForcedError {
  isError?: string;
}

export default async function generateError(_req: Request): Promise<ForcedError | null> {
  throw new Error("This is a forced error");
}
