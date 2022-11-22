(function(window) {
  window["env"] = window["env"] || {};

  // BackEnd Environment variables
  window["env"]["fineractApiUrls"] = 'https://fineract.test.prestamype.com';
  window["env"]["fineractApiUrl"]  = 'https://fineract.test.prestamype.com';

  window["env"]["apiProvider"] = '/fineract-provider/api';
  window["env"]["apiVersion"]  = '/v1';

  window["env"]["fineractPlatformTenantId"]  = 'default';

  // Language Environment variables
  window["env"]["defaultLanguage"] = 'es-MX';
  window["env"]["supportedLanguages"] = 'es-MX,en-US,fr-FR';
})(this);
