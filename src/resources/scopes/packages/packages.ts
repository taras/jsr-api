// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DependentsAPI from './dependents';
import { DependentListParams, DependentListResponse, Dependents } from './dependents';
import * as ScoreAPI from './score';
import { Score, ScoreRetrieveParams } from './score';
import * as VersionsAPI from './versions/versions';
import {
  VersionCreateParams,
  VersionListParams,
  VersionListResponse,
  VersionRetrieveParams,
  VersionUpdateParams,
  Versions,
} from './versions/versions';
import { APIPromise } from '../../../api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Packages extends APIResource {
  dependents: DependentsAPI.Dependents = new DependentsAPI.Dependents(this._client);
  score: ScoreAPI.Score = new ScoreAPI.Score(this._client);
  versions: VersionsAPI.Versions = new VersionsAPI.Versions(this._client);

  /**
   * Creates a new package in a scope
   */
  create(scope: string, body: PackageCreateParams, options?: RequestOptions): APIPromise<Package> {
    return this._client.post(path`/scopes/${scope}/packages`, { body, ...options });
  }

  /**
   * Returns details of a package
   */
  retrieve(_package: string, params: PackageRetrieveParams, options?: RequestOptions): APIPromise<Package> {
    const { scope } = params;
    return this._client.get(path`/scopes/${scope}/packages/${_package}`, options);
  }

  /**
   * Updates the details of a package
   */
  update(_package: string, params: PackageUpdateParams, options?: RequestOptions): APIPromise<Package> {
    const { scope, ...body } = params;
    return this._client.patch(path`/scopes/${scope}/packages/${_package}`, { body, ...options });
  }

  /**
   * Returns a list of packages in a scope
   */
  list(
    scope: string,
    query: PackageListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PackageListResponse> {
    return this._client.get(path`/scopes/${scope}/packages`, { query, ...options });
  }

  /**
   * Deletes a package if the package has no versions
   */
  delete(_package: string, params: PackageDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { scope } = params;
    return this._client.delete(path`/scopes/${scope}/packages/${_package}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}

export interface Package {
  /**
   * The date and time when the package was created.
   */
  createdAt: string;

  /**
   * The description of the package.
   */
  description: string;

  /**
   * The name of a package.
   */
  name: string;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The date and time when the package was last updated.
   */
  updatedAt: string;

  githubRepository?: Package.GitHubRepository;

  runtimeCompat?: Package.RuntimeCompat;

  score?: number;
}

export namespace Package {
  export interface GitHubRepository {
    /**
     * The GitHub repository name.
     */
    name?: string;

    /**
     * The GitHub user / organization of the repository.
     */
    owner?: string;
  }

  export interface RuntimeCompat {
    /**
     * Whether the package is compatible with web browsers.
     */
    browser?: boolean | null;

    /**
     * Whether the package is compatible with Bun.
     */
    bun?: boolean | null;

    /**
     * Whether the package is compatible with Deno.
     */
    deno?: boolean | null;

    /**
     * Whether the package is compatible with Node.js.
     */
    node?: boolean | null;

    /**
     * Whether the package is compatible with workerd.
     */
    workerd?: boolean | null;
  }
}

export interface PackageScore {
  allEntrypointsDocs: boolean;

  allFastCheck: boolean;

  atLeastOneRuntimeCompatible: boolean;

  hasDescription: boolean;

  hasProvenance: boolean;

  hasReadme: boolean;

  hasReadmeExamples: boolean;

  multipleRuntimesCompatible: boolean;

  percentageDocumentedSymbols: number;

  total?: number;
}

export interface PackageListResponse {
  items?: Array<Package>;

  total?: number;
}

export interface PackageCreateParams {
  /**
   * The name of a package.
   */
  package: string;
}

export interface PackageRetrieveParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

export type PackageUpdateParams =
  | PackageUpdateParams.Variant0
  | PackageUpdateParams.Variant1
  | PackageUpdateParams.Variant2
  | PackageUpdateParams.Variant3;

export declare namespace PackageUpdateParams {
  export interface Variant0 {
    /**
     * Path param: The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * Body param: The description of the package.
     */
    description: string;
  }

  export interface Variant1 {
    /**
     * Path param: The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * Body param:
     */
    githubRepository: Variant1.GitHubRepository | null;
  }

  export namespace Variant1 {
    export interface GitHubRepository {
      /**
       * The GitHub user / organization of the repository.
       */
      owner: string;

      /**
       * The GitHub repository name.
       */
      repo: string;
    }
  }

  export interface Variant2 {
    /**
     * Path param: The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * Body param:
     */
    runtimeCompat: Variant2.RuntimeCompat;
  }

  export namespace Variant2 {
    export interface RuntimeCompat {
      /**
       * Whether the package is compatible with web browsers.
       */
      browser?: boolean | null;

      /**
       * Whether the package is compatible with Bun.
       */
      bun?: boolean | null;

      /**
       * Whether the package is compatible with Deno.
       */
      deno?: boolean | null;

      /**
       * Whether the package is compatible with Node.js.
       */
      node?: boolean | null;

      /**
       * Whether the package is compatible with workerd.
       */
      workerd?: boolean | null;
    }
  }

  export interface Variant3 {
    /**
     * Path param: The name of a scope. This must not be @ prefixed.
     */
    scope: string;

    /**
     * Body param: Whether this package should be archived or not.
     */
    isArchived: boolean;
  }
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
}

export interface PackageDeleteParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

Packages.Dependents = Dependents;
Packages.Score = Score;
Packages.Versions = Versions;

export declare namespace Packages {
  export {
    type Package as Package,
    type PackageScore as PackageScore,
    type PackageListResponse as PackageListResponse,
    type PackageCreateParams as PackageCreateParams,
    type PackageRetrieveParams as PackageRetrieveParams,
    type PackageUpdateParams as PackageUpdateParams,
    type PackageListParams as PackageListParams,
    type PackageDeleteParams as PackageDeleteParams,
  };

  export {
    Dependents as Dependents,
    type DependentListResponse as DependentListResponse,
    type DependentListParams as DependentListParams,
  };

  export { Score as Score, type ScoreRetrieveParams as ScoreRetrieveParams };

  export {
    Versions as Versions,
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };
}
