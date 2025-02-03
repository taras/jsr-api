// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Scopes extends APIResource {
  /**
   * Returns a list of scopes that a user is a member of
   */
  list(id: string, options?: RequestOptions): APIPromise<ScopeListResponse> {
    return this._client.get(`/users/${id}/scopes`, options);
  }
}

export type ScopeListResponse = Array<Shared.Scope>;

export declare namespace Scopes {
  export { type ScopeListResponse as ScopeListResponse };
}
