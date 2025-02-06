// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AuthorizationsAPI from './authorizations';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Details extends APIResource {
  /**
   * Returns details of an authorization
   */
  retrieve(code: string, options?: RequestOptions): APIPromise<AuthorizationsAPI.Authorization> {
    return this._client.get(path`/authorizations/details/${code}`, options);
  }
}
