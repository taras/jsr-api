// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import JsrAPI from 'jsr-api';

const client = new JsrAPI({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource packages', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.scopes.packages.create('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
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
  test.skip('create: required and optional params', async () => {
    const response = await client.scopes.packages.create('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      package: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.scopes.packages.retrieve('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.scopes.packages.retrieve('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.scopes.packages.update('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
      description: 'description',
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
  test.skip('update: required and optional params', async () => {
    const response = await client.scopes.packages.update('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
      description: 'description',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.scopes.packages.list('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.scopes.packages.list(
        '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
        { limit: 1, page: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(JsrAPI.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.scopes.packages.delete('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.scopes.packages.delete('/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/', {
      scope: '/n6i-713uu0l359-w4uvyl7cb9-dq69-k91s48j2c13v/',
    });
  });
});
