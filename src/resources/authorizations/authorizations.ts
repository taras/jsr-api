// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as DetailsAPI from './details';
import { Details } from './details';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Authorizations extends APIResource {
  details: DetailsAPI.Details = new DetailsAPI.Details(this._client);

  /**
   * Approves an authorization
   */
  approve(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/authorizations/approve/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Denies an authorization
   */
  deny(code: string, options?: RequestOptions): APIPromise<void> {
    return this._client.post(path`/authorizations/deny/${code}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Exchanges an authorization code for an access token
   */
  exchange(
    body: AuthorizationExchangeParams,
    options?: RequestOptions,
  ): APIPromise<AuthorizationExchangeResponse> {
    return this._client.post('/authorizations/exchange', { body, ...options });
  }

  /**
   * Starts an authorization flow
   */
  start(body: AuthorizationStartParams, options?: RequestOptions): APIPromise<CreateAuthorizationResponse> {
    return this._client.post('/authorizations', { body, ...options });
  }
}

export interface Authorization {
  /**
   * The authorization code.
   */
  code: string;

  /**
   * The date and time until which the authorization can be approved / exchanged.
   */
  expiresAt: string;

  /**
   * The permissions that the token will have.
   */
  permissions: Array<Authorization.UnionMember0 | Authorization.UnionMember1 | Authorization.UnionMember2>;
}

export namespace Authorization {
  export interface UnionMember0 {
    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;
  }

  export interface UnionMember1 {
    /**
     * The name of a package.
     */
    package: string;

    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;
  }

  export interface UnionMember2 {
    /**
     * The name of a package.
     */
    package: string;

    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * The SHA256 hash of the tarball.
     */
    tarballHash: string;

    /**
     * A semantic version.
     */
    version: string;
  }
}

export interface AuthorizationExchangeResponse {
  /**
   * The device token that can be used to authenticate requests.
   */
  token: string;

  /**
   * The user that the token is for.
   */
  user: Shared.User;
}

export interface CreateAuthorizationResponse {
  /**
   * The authorization code that the user can manually enter if they can not directly
   * visit the link.
   */
  code: string;

  /**
   * The token that can be used to exchange for a device token after the
   * authorization has been approved.
   */
  exchangeToken: string;

  /**
   * The date and time until which the authorization can be approved / exchanged.
   */
  expiresAt: string;

  /**
   * The number of seconds that should be waited between polling the status of the
   * authorization.
   */
  pollInterval: number;

  /**
   * The URL that the user should visit to approve the authorization.
   */
  verificationUrl?: string;
}

export interface AuthorizationExchangeParams {
  /**
   * The token that can be used to exchange for a device token after the
   * authorization has been approved.
   */
  exchangeToken: string;

  /**
   * The verifier that was used to generate the challenge.
   */
  verifier: string;
}

export interface AuthorizationStartParams {
  /**
   * The challenge that will later be needed to retrieve the token after
   * authorization.
   */
  challenge: string;

  /**
   * The permissions that the token will have.
   */
  permissions?: Array<
    | AuthorizationStartParams.UnionMember0
    | AuthorizationStartParams.UnionMember1
    | AuthorizationStartParams.UnionMember2
  >;
}

export namespace AuthorizationStartParams {
  export interface UnionMember0 {
    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;
  }

  export interface UnionMember1 {
    /**
     * The name of a package.
     */
    package: string;

    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;
  }

  export interface UnionMember2 {
    /**
     * The name of a package.
     */
    package: string;

    /**
     * The permission name.
     */
    permission: 'package/publish';

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * The SHA256 hash of the tarball.
     */
    tarballHash: string;

    /**
     * A semantic version.
     */
    version: string;
  }
}

Authorizations.Details = Details;

export declare namespace Authorizations {
  export {
    type Authorization as Authorization,
    type AuthorizationExchangeResponse as AuthorizationExchangeResponse,
    type CreateAuthorizationResponse as CreateAuthorizationResponse,
    type AuthorizationExchangeParams as AuthorizationExchangeParams,
    type AuthorizationStartParams as AuthorizationStartParams,
  };

  export { Details as Details };
}
