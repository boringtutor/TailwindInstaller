import { error } from "./logger";

export function handleError(e: unknown) {
  if (typeof e === "string") {
    error(e);
    process.exit(1);
  }

  if (e instanceof Error) {
    error(e.message);
    process.exit(1);
  }

  error("Something went wrong. Please try again.");
  process.exit(1);
}
