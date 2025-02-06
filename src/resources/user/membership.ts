// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Membership extends APIResource {
  /**
   * Returns details of the authenticated user's membership of a scope
   */
  retrieve(scope: string, options?: RequestOptions): APIPromise<Shared.ScopeMember> {
    return this._client.get(path`/user/member/${scope}`, options);
  }
}
