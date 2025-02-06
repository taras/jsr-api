// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invites extends APIResource {
  /**
   * Returns a list of invites to scopes that the authenticated user has received
   */
  list(options?: RequestOptions): APIPromise<InviteListResponse> {
    return this._client.get('/user/invites', options);
  }

  /**
   * Accepts an invite to a scope
   */
  accept(scope: string, options?: RequestOptions): APIPromise<Shared.ScopeMember> {
    return this._client.post(path`/user/invites/${scope}`, options);
  }

  /**
   * Declines an invite to a scope
   */
  decline(scope: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/user/invites/${scope}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type InviteListResponse = Array<Shared.ScopeInvite>;

export declare namespace Invites {
  export { type InviteListResponse as InviteListResponse };
}
