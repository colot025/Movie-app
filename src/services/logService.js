// import * as Sentry from "@sentry/react";
// import { Integrations } from "@sentry/tracing";

function init() {
  // Sentry.init({
  //   dsn: "https://61c46f78ca4b43e6941d08c05d3e6151@o686204.ingest.sentry.io/5772786",
  //   integrations: [new Integrations.BrowserTracing()],
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  //Sentry.captureException(error);
  console.error(error);
}

export default {
  init,
  log,
};
