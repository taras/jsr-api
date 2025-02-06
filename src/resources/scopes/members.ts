// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Updates the roles of a scope member
   */
  update(
    userID: string,
    params: MemberUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.ScopeMember> {
    const { scope, ...body } = params;
    return this._client.patch(path`/scopes/${scope}/members/${userID}`, { body, ...options });
  }

  /**
   * Returns a list of members of a scope
   */
  list(scope: string, options?: RequestOptions): APIPromise<MemberListResponse> {
    return this._client.get(path`/scopes/${scope}/members`, options);
  }

  /**
   * Invites a user to a scope
   */
  invite(scope: string, body: MemberInviteParams, options?: RequestOptions): APIPromise<Shared.ScopeInvite> {
    return this._client.post(path`/scopes/${scope}/members`, { body, ...options });
  }

  /**
   * Removes a member from a scope
   */
  remove(userID: string, params: MemberRemoveParams, options?: RequestOptions): APIPromise<void> {
    const { scope } = params;
    return this._client.delete(path`/scopes/${scope}/members/${userID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export type MemberListResponse = Array<Shared.ScopeMember>;

export interface MemberUpdateParams {
  /**
   * Path param: The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * Body param: Whether the user should be an admin of the scope.
   */
  isAdmin: boolean;
}

export interface MemberInviteParams {
  /**
   * The GitHub login of the user to add to the scope.
   */
  githubLogin: string;
}

export interface MemberRemoveParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

export declare namespace Members {
  export {
    type MemberListResponse as MemberListResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberInviteParams as MemberInviteParams,
    type MemberRemoveParams as MemberRemoveParams,
  };
}
