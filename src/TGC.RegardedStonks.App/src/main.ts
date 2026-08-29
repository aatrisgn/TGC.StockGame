import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { buildAppConfig } from './app/app.config';
import { RuntimeConfig } from './app/core/models/runtime-config.model';

async function fetchRuntimeConfig(): Promise<RuntimeConfig> {
  const response = await fetch('/config/runtime.configuration.json', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error(`Failed to load runtime.configuration.json: ${response.status} ${response.statusText}`);
  }
  return (await response.json()) as RuntimeConfig;
}

fetchRuntimeConfig()
  .then((config) => buildAppConfig(config))
  .then((appConfig) => bootstrapApplication(App, appConfig))
  .catch((err) => {
    console.error('Fatal: could not load runtime configuration', err);
    document.body.innerHTML =
      '<p style="font-family: monospace; padding: 2rem;">Failed to load application configuration. Please try again later.</p>';
  });
