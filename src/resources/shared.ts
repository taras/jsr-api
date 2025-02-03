// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface PackageVersion {
  /**
   * The date and time when the package version was created.
   */
  createdAt: string;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The date and time when the package version was last updated.
   */
  updatedAt: string;

  /**
   * A semantic version.
   */
  version: string;

  /**
   * Whether the version has been yanked.
   */
  yanked: boolean;

  /**
   * The name of a package.
   */
  package?: string;

  /**
   * Rekor log ID for the published package version.
   */
  rekorLogId?: string;
}

export interface Scope {
  /**
   * The date and time when the scope was created.
   */
  createdAt: string;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The date and time when the scope was last updated.
   */
  updatedAt: string;

  creator?: User;

  /**
   * Whether to verify the actor of a GitHub Actions run when authenticating
   * publishing with a GitHub Actions OIDC token.
   */
  ghActionsVerifyActor?: boolean;

  quotas?: Scope.Quotas;

  /**
   * Whether to require publishing from a CI environment. This disables publishing
   * from a local environment.
   */
  requirePublishingFromCI?: boolean;
}

export namespace Scope {
  export interface Quotas {
    /**
     * The maximum number of new packages allowed to be created in the scope in a week.
     */
    newPackagePerWeekLimit?: number;

    /**
     * The number of new packages created in the scope in the last week.
     */
    newPackagePerWeekUsage?: number;

    /**
     * The maximum number of packages allowed in the scope.
     */
    packageLimit?: number;

    /**
     * The number of packages in the scope.
     */
    packageUsage?: number;

    /**
     * The maximum number of times packages in the scope can be published in a week.
     */
    publishAttemptsPerWeekLimit?: number;

    /**
     * The number of times packages in the scope have been published in the last week.
     */
    publishAttemptsPerWeekUsage?: number;
  }
}

export interface ScopeInvite {
  /**
   * The date and time when the invite was created.
   */
  createdAt: string;

  /**
   * The user that sent the invite.
   */
  inviter: User;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The user that the invite is for.
   */
  targetUser: User;

  /**
   * The date and time when the invite was last updated.
   */
  updatedAt: string;
}

export interface ScopeMember {
  /**
   * The date and time when the user was added to the scope.
   */
  createdAt: string;

  /**
   * Whether the user is an admin of the scope.
   */
  isAdmin: boolean;

  /**
   * The name of a scope. This must not be @ prefixed.
   */
  scope: string;

  /**
   * The date and time when the scope member roles were last updated.
   */
  updatedAt: string;

  user: User;
}

export interface User {
  /**
   * The ID of a user.
   */
  id: string;

  /**
   * The URL to the user's avatar.
   */
  avatarUrl: string;

  /**
   * The date and time when the user profile was created.
   */
  createdAt: string;

  /**
   * The user's display name.
   */
  name: string;

  /**
   * The date and time when the user profile was last updated.
   */
  updatedAt: string;

  /**
   * The user's email address.
   */
  email?: string;

  /**
   * The user's GitHub ID.
   */
  githubId?: number;

  /**
   * The number of invites pending for the user.
   */
  inviteCount?: number;

  /**
   * Whether the user is blocked from using the registry.
   */
  isBlocked?: boolean;

  /**
   * Whether the user is a staff member.
   */
  isStaff?: boolean;

  /**
   * The maximum number of scopes the user can create.
   */
  scopeLimit?: number;

  /**
   * The number of scopes the user created.
   */
  scopeUsage?: number;
}
