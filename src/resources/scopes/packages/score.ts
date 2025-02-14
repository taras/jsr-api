// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PackagesAPI from './packages';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Score extends APIResource {
  /**
   * Returns the package score details
   */
  retrieve(
    _package: string,
    params: ScoreRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PackagesAPI.PackageScore> {
    const { scope } = params;
    return this._client.get(path`/scopes/${scope}/packages/${_package}/score`, options);
  }
}

export interface ScoreRetrieveParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

export declare namespace Score {
  export { type ScoreRetrieveParams as ScoreRetrieveParams };
}
