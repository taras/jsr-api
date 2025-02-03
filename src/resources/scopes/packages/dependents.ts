// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Dependents extends APIResource {
  /**
   * Returns a list of packages that depend on a package
   */
  list(
    _package: string,
    params: DependentListParams,
    options?: RequestOptions,
  ): APIPromise<DependentListResponse> {
    const { scope, ...query } = params;
    return this._client.get(`/scopes/${scope}/packages/${_package}/dependents`, { query, ...options });
  }
}

export interface DependentListResponse {
  items?: Array<DependentListResponse.Item>;

  total?: number;
}

export namespace DependentListResponse {
  export interface Item {
    /**
     * The name of a package.
     */
    name: string;

    /**
     * The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * The total number of versions of the package.
     */
    totalVersions: number;

    versions?: Array<string>;
  }
}

export interface DependentListParams {
  /**
   * Path param: The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * Query param: The maximum number of dependents to return
   */
  limit?: number;

  /**
   * Query param: The page number of dependents to return
   */
  page?: number;

  /**
   * Query param: The maximum number of versions per package to return
   */
  versions_per_package_limit?: number;
}

export declare namespace Dependents {
  export {
    type DependentListResponse as DependentListResponse,
    type DependentListParams as DependentListParams,
  };
}
