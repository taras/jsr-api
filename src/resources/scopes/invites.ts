// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Invites extends APIResource {
  /**
   * Returns a list of invites to a scope
   */
  list(scope: string, options?: RequestOptions): APIPromise<InviteListResponse> {
    return this._client.get(path`/scopes/${scope}/invites`, options);
  }

  /**
   * Deletes an invite to a scope
   */
  delete(userID: string, params: InviteDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { scope } = params;
    return this._client.delete(path`/scopes/${scope}/invites/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type InviteListResponse = Array<Shared.ScopeInvite>;

export interface InviteDeleteParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

export declare namespace Invites {
  export { type InviteListResponse as InviteListResponse, type InviteDeleteParams as InviteDeleteParams };
}
