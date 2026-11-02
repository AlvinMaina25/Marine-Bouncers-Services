import { createServerFn } from "@tanstack/react-start";
import { getRequest } from "@tanstack/react-start/server";

/**
 * Absolute origin of the current request, for building absolute URLs
 * in head() metadata (og:image, twitter:image). The sandbox rewrites
 * localhost behind x-forwarded-host; elsewhere the request URL is
 * authoritative.
 */
export const getRequestOrigin = createServerFn({ method: "GET" }).handler(() => {
  const req = getRequest();
  const url = new URL(req.url);
  const sandboxHost =
    url.hostname === "localhost" ? req.headers.get("x-forwarded-host") : null;
  return sandboxHost ? `https://${sandboxHost}` : url.origin;
});
