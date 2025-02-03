// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as PublishingTasksAPI from '../../../publishing-tasks';
import * as Shared from '../../../shared';
import * as DependenciesAPI from './dependencies';
import { Dependencies, Dependency, DependencyListParams, DependencyListResponse } from './dependencies';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Versions extends APIResource {
  dependencies: DependenciesAPI.Dependencies = new DependenciesAPI.Dependencies(this._client);

  /**
   * Creates a new version of a package
   */
  create(
    version: string,
    params: VersionCreateParams,
    options?: RequestOptions,
  ): APIPromise<PublishingTasksAPI.PublishingTask> {
    const { scope, package: _package, config, body } = params;
    return this._client.post(`/scopes/${scope}/packages/${_package}/versions/${version}`, {
      query: { config },
      body: body,
      ...options,
    });
  }

  /**
   * Returns details of a package version
   */
  retrieve(
    version: string,
    params: VersionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PackageVersion> {
    const { scope, package: _package } = params;
    return this._client.get(`/scopes/${scope}/packages/${_package}/versions/${version}`, options);
  }

  /**
   * Updates the details of a package version
   */
  update(
    version: string,
    params: VersionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.PackageVersion> {
    const { scope, package: _package, ...body } = params;
    return this._client.patch(`/scopes/${scope}/packages/${_package}/versions/${version}`, {
      body,
      ...options,
    });
  }

  /**
   * Returns a list of versions of a package
   */
  list(
    _package: string,
    params: VersionListParams,
    options?: RequestOptions,
  ): APIPromise<VersionListResponse> {
    const { scope } = params;
    return this._client.get(`/scopes/${scope}/packages/${_package}/versions`, options);
  }
}

export type VersionListResponse = Array<Shared.PackageVersion>;

export interface VersionCreateParams {
  /**
   * Path param: The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * Path param: The name of a package.
   */
  package: string;

  /**
   * Query param: The path to the config file
   */
  config: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface VersionRetrieveParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The name of a package.
   */
  package: string;
}

export interface VersionUpdateParams {
  /**
   * Path param: The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * Path param: The name of a package.
   */
  package: string;

  /**
   * Body param: Whether the version is yanked or not.
   */
  yanked: boolean;
}

export interface VersionListParams {
  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;
}

Versions.Dependencies = Dependencies;

export declare namespace Versions {
  export {
    type VersionListResponse as VersionListResponse,
    type VersionCreateParams as VersionCreateParams,
    type VersionRetrieveParams as VersionRetrieveParams,
    type VersionUpdateParams as VersionUpdateParams,
    type VersionListParams as VersionListParams,
  };

  export {
    Dependencies as Dependencies,
    type Dependency as Dependency,
    type DependencyListResponse as DependencyListResponse,
    type DependencyListParams as DependencyListParams,
  };
}
