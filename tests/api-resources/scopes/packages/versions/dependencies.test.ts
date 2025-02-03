// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import JsrAPI from 'jsr-api';

const client = new JsrAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dependencies', () => {
  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.scopes.packages.versions.dependencies.list('1.2.3', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
      package: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.scopes.packages.versions.dependencies.list('1.2.3', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
      package: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
    });
  });
});
