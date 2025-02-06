// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Dependencies extends APIResource {
  /**
   * Returns a list of dependencies of a package
   */
  list(
    version: string,
    params: DependencyListParams,
    options?: RequestOptions,
  ): APIPromise<DependencyListResponse> {
    const { scope, package: _package } = params;
    return this._client.get(
      path`/scopes/${scope}/packages/${_package}/versions/${version}/dependencies`,
      options,
    );
  }
}

export interface Dependency {
  /**
   * The semver constraint of the dependency.
   */
  constraint: string;

  /**
   * The kind of dependency.
   */
  kind: 'jsr' | 'npm';

  /**
   * The fully qualified name of the dependency.
   */
  name: string;

  /**
   * The path being imported from the dependency. This may be the empty string if the
   * "default entrypoint" is being imported.
   */
  path: string;
}

export type DependencyListResponse = Array<Dependency>;

export interface DependencyListParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The name of a package.
   */
  package: string;
}

export declare namespace Dependencies {
  export {
    type Dependency as Dependency,
    type DependencyListResponse as DependencyListResponse,
    type DependencyListParams as DependencyListParams,
  };
}
