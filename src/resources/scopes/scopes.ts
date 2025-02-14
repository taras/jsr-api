// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as InvitesAPI from './invites';
import { InviteDeleteParams, InviteListResponse, Invites } from './invites';
import * as MembersAPI from './members';
import {
  MemberInviteParams,
  MemberListResponse,
  MemberRemoveParams,
  MemberUpdateParams,
  Members,
} from './members';
import * as PackagesAPI from './packages/packages';
import {
  Package,
  PackageCreateParams,
  PackageDeleteParams,
  PackageListParams,
  PackageListResponse,
  PackageRetrieveParams,
  PackageScore,
  PackageUpdateParams,
  Packages,
} from './packages/packages';
import { APIPromise } from '../../api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Scopes extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);
  packages: PackagesAPI.Packages = new PackagesAPI.Packages(this._client);

  /**
   * Creates a new scope
   */
  create(body: ScopeCreateParams, options?: RequestOptions): APIPromise<Shared.Scope> {
    return this._client.post('/scopes', { body, ...options });
  }

  /**
   * Returns details of a scope
   */
  retrieve(scope: string, options?: RequestOptions): APIPromise<Shared.Scope> {
    return this._client.get(path`/scopes/${scope}`, options);
  }

  /**
   * Updates the details of a scope
   */
  update(scope: string, body: ScopeUpdateParams, options?: RequestOptions): APIPromise<Shared.Scope> {
    return this._client.patch(path`/scopes/${scope}`, { body, ...options });
  }

  /**
   * Deletes a scope if the scope has no packages
   */
  delete(scope: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/scopes/${scope}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface ScopeCreateParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope?: string;
}

export type ScopeUpdateParams = ScopeUpdateParams.Variant0 | ScopeUpdateParams.Variant1;

export declare namespace ScopeUpdateParams {
  export interface Variant0 {
    /**
     * Whether to verify the actor of a GitHub Actions run when authenticating
     * publishing with a GitHub Actions OIDC token.
     */
    ghActionsVerifyActor: boolean;
  }

  export interface Variant1 {
    /**
     * Whether to require publishing from a CI environment. This disables publishing
     * from a local environment.
     */
    requirePublishingFromCI: boolean;
  }
}

Scopes.Members = Members;
Scopes.Invites = Invites;
Scopes.Packages = Packages;

export declare namespace Scopes {
  export { type ScopeCreateParams as ScopeCreateParams, type ScopeUpdateParams as ScopeUpdateParams };

  export {
    Members as Members,
    type MemberListResponse as MemberListResponse,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberInviteParams as MemberInviteParams,
    type MemberRemoveParams as MemberRemoveParams,
  };

  export {
    Invites as Invites,
    type InviteListResponse as InviteListResponse,
    type InviteDeleteParams as InviteDeleteParams,
  };

  export {
    Packages as Packages,
    type Package as Package,
    type PackageScore as PackageScore,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageUpdateParams as PackageUpdateParams,
    type PackageListParams as PackageListParams,
    type PackageDeleteParams as PackageDeleteParams,
  };
}
