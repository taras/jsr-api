// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as ScopesAPI from './scopes';
import { ScopeListResponse, Scopes } from './scopes';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Users extends APIResource {
  scopes: ScopesAPI.Scopes = new ScopesAPI.Scopes(this._client);

  /**
   * Returns details of a user
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<Shared.User> {
    return this._client.get(`/users/${id}`, options);
  }
}

Users.Scopes = Scopes;

export declare namespace Users {
  export { Scopes as Scopes, type ScopeListResponse as ScopeListResponse };
}
