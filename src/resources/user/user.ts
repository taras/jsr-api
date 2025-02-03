// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import * as InvitesAPI from './invites';
import { InviteListResponse, Invites } from './invites';
import * as MembershipAPI from './membership';
import { Membership } from './membership';
import * as ScopesAPI from './scopes';
import { ScopeListResponse, Scopes } from './scopes';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';

export class User extends APIResource {
  scopes: ScopesAPI.Scopes = new ScopesAPI.Scopes(this._client);
  membership: MembershipAPI.Membership = new MembershipAPI.Membership(this._client);
  invites: InvitesAPI.Invites = new InvitesAPI.Invites(this._client);

  /**
   * Returns details of the authenticated user
   */
  retrieve(options?: RequestOptions): APIPromise<Shared.User> {
    return this._client.get('/user', options);
  }
}

User.Scopes = Scopes;
User.Membership = Membership;
User.Invites = Invites;

export declare namespace User {
  export { Scopes as Scopes, type ScopeListResponse as ScopeListResponse };

  export { Membership as Membership };

  export { Invites as Invites, type InviteListResponse as InviteListResponse };
}
