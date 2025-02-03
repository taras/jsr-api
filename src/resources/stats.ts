// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Shared from './shared';
import * as PackagesAPI from './scopes/packages/packages';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Stats extends APIResource {
  /**
   * Returns stats about the registry
   */
  retrieve(options?: RequestOptions): APIPromise<Stats> {
    return this._client.get('/stats', options);
  }
}

export interface Stats {
  /**
   * The featured packages
   */
  featured: Array<PackagesAPI.Package>;

  /**
   * The newest packages.
   */
  newest: Array<PackagesAPI.Package>;

  /**
   * The recently uploaded package versions.
   */
  updated: Array<Shared.PackageVersion>;
}

export declare namespace Stats {
  export { type Stats as Stats };
}
