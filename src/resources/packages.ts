// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as PackagesPackagesAPI from './scopes/packages/packages';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';

export class Packages extends APIResource {
  /**
   * Returns a list of packages
   */
  list(
    query: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageListResponse> {
    return this._client.get('/packages', { query, ...options });
  }
}

export interface PackageListResponse {
  items?: Array<PackagesPackagesAPI.Package>;

  total?: number;
}

export interface PackageListParams {
  /**
   * The maximum number of packages to return
   */
  limit?: number;

  /**
   * The page number of packages to return
   */
  page?: number;

  /**
   * The search query
   */
  query?: string;
}

export declare namespace Packages {
  export { type PackageListResponse as PackageListResponse, type PackageListParams as PackageListParams };
}
