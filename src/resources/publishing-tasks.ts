// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PublishingTasks extends APIResource {
  /**
   * Returns details of a publishing task
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<PublishingTask> {
    return this._client.get(path`/publishing_tasks/${id}`, options);
  }
}

export interface PublishingTask {
  /**
   * The ID of the publishing task.
   */
  id: string;

  /**
   * The date and time when the publishing task was created.
   */
  createdAt: string;

  error: PublishingTask.Error | null;

  /**
   * The name of a package.
   */
  packageName: string;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  packageScope: string;

  /**
   * A semantic version.
   */
  packageVersion: string;

  /**
   * The status of the publishing task.
   */
  status: 'pending' | 'processing' | 'processed' | 'success' | 'failure';

  /**
   * The date and time when the publishing task was last updated.
   */
  updatedAt: string;

  /**
   * The ID of a user.
   */
  userId: string | null;
}

export namespace PublishingTask {
  export interface Error {
    /**
     * The error code.
     */
    code?: string;

    /**
     * The error message.
     */
    message?: string;
  }
}

export declare namespace PublishingTasks {
  export { type PublishingTask as PublishingTask };
}
