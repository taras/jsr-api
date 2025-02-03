# Shared

Types:

- <code><a href="./src/resources/shared.ts">PackageVersion</a></code>
- <code><a href="./src/resources/shared.ts">Scope</a></code>
- <code><a href="./src/resources/shared.ts">ScopeInvite</a></code>
- <code><a href="./src/resources/shared.ts">ScopeMember</a></code>
- <code><a href="./src/resources/shared.ts">User</a></code>

# Scopes

Methods:

- <code title="post /scopes">client.scopes.<a href="./src/resources/scopes/scopes.ts">create</a>({ ...params }) -> Scope</code>
- <code title="get /scopes/{scope}">client.scopes.<a href="./src/resources/scopes/scopes.ts">retrieve</a>(scope) -> Scope</code>
- <code title="patch /scopes/{scope}">client.scopes.<a href="./src/resources/scopes/scopes.ts">update</a>(scope, { ...params }) -> Scope</code>
- <code title="delete /scopes/{scope}">client.scopes.<a href="./src/resources/scopes/scopes.ts">delete</a>(scope) -> void</code>

## Members

Types:

- <code><a href="./src/resources/scopes/members.ts">MemberListResponse</a></code>

Methods:

- <code title="patch /scopes/{scope}/members/{userId}">client.scopes.members.<a href="./src/resources/scopes/members.ts">update</a>(userID, { ...params }) -> ScopeMember</code>
- <code title="get /scopes/{scope}/members">client.scopes.members.<a href="./src/resources/scopes/members.ts">list</a>(scope) -> MemberListResponse</code>
- <code title="post /scopes/{scope}/members">client.scopes.members.<a href="./src/resources/scopes/members.ts">invite</a>(scope, { ...params }) -> ScopeInvite</code>
- <code title="delete /scopes/{scope}/members/{userId}">client.scopes.members.<a href="./src/resources/scopes/members.ts">remove</a>(userID, { ...params }) -> void</code>

## Invites

Types:

- <code><a href="./src/resources/scopes/invites.ts">InviteListResponse</a></code>

Methods:

- <code title="get /scopes/{scope}/invites">client.scopes.invites.<a href="./src/resources/scopes/invites.ts">list</a>(scope) -> InviteListResponse</code>
- <code title="delete /scopes/{scope}/invites/{userId}">client.scopes.invites.<a href="./src/resources/scopes/invites.ts">delete</a>(userID, { ...params }) -> void</code>

## Packages

Types:

- <code><a href="./src/resources/scopes/packages/packages.ts">Package</a></code>
- <code><a href="./src/resources/scopes/packages/packages.ts">PackageScore</a></code>
- <code><a href="./src/resources/scopes/packages/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="post /scopes/{scope}/packages">client.scopes.packages.<a href="./src/resources/scopes/packages/packages.ts">create</a>(scope, { ...params }) -> Package</code>
- <code title="get /scopes/{scope}/packages/{package}">client.scopes.packages.<a href="./src/resources/scopes/packages/packages.ts">retrieve</a>(\_package, { ...params }) -> Package</code>
- <code title="patch /scopes/{scope}/packages/{package}">client.scopes.packages.<a href="./src/resources/scopes/packages/packages.ts">update</a>(\_package, { ...params }) -> Package</code>
- <code title="get /scopes/{scope}/packages">client.scopes.packages.<a href="./src/resources/scopes/packages/packages.ts">list</a>(scope, { ...params }) -> PackageListResponse</code>
- <code title="delete /scopes/{scope}/packages/{package}">client.scopes.packages.<a href="./src/resources/scopes/packages/packages.ts">delete</a>(\_package, { ...params }) -> void</code>

### Dependents

Types:

- <code><a href="./src/resources/scopes/packages/dependents.ts">DependentListResponse</a></code>

Methods:

- <code title="get /scopes/{scope}/packages/{package}/dependents">client.scopes.packages.dependents.<a href="./src/resources/scopes/packages/dependents.ts">list</a>(\_package, { ...params }) -> DependentListResponse</code>

### Score

Methods:

- <code title="get /scopes/{scope}/packages/{package}/score">client.scopes.packages.score.<a href="./src/resources/scopes/packages/score.ts">retrieve</a>(\_package, { ...params }) -> PackageScore</code>

### Versions

Types:

- <code><a href="./src/resources/scopes/packages/versions/versions.ts">VersionListResponse</a></code>

Methods:

- <code title="post /scopes/{scope}/packages/{package}/versions/{version}">client.scopes.packages.versions.<a href="./src/resources/scopes/packages/versions/versions.ts">create</a>(version, { ...params }) -> PublishingTask</code>
- <code title="get /scopes/{scope}/packages/{package}/versions/{version}">client.scopes.packages.versions.<a href="./src/resources/scopes/packages/versions/versions.ts">retrieve</a>(version, { ...params }) -> PackageVersion</code>
- <code title="patch /scopes/{scope}/packages/{package}/versions/{version}">client.scopes.packages.versions.<a href="./src/resources/scopes/packages/versions/versions.ts">update</a>(version, { ...params }) -> PackageVersion</code>
- <code title="get /scopes/{scope}/packages/{package}/versions">client.scopes.packages.versions.<a href="./src/resources/scopes/packages/versions/versions.ts">list</a>(\_package, { ...params }) -> VersionListResponse</code>

#### Dependencies

Types:

- <code><a href="./src/resources/scopes/packages/versions/dependencies.ts">Dependency</a></code>
- <code><a href="./src/resources/scopes/packages/versions/dependencies.ts">DependencyListResponse</a></code>

Methods:

- <code title="get /scopes/{scope}/packages/{package}/versions/{version}/dependencies">client.scopes.packages.versions.dependencies.<a href="./src/resources/scopes/packages/versions/dependencies.ts">list</a>(version, { ...params }) -> DependencyListResponse</code>

# Packages

Types:

- <code><a href="./src/resources/packages.ts">PackageListResponse</a></code>

Methods:

- <code title="get /packages">client.packages.<a href="./src/resources/packages.ts">list</a>({ ...params }) -> PackageListResponse</code>

# User

Methods:

- <code title="get /user">client.user.<a href="./src/resources/user/user.ts">retrieve</a>() -> User</code>

## Scopes

Types:

- <code><a href="./src/resources/user/scopes.ts">ScopeListResponse</a></code>

Methods:

- <code title="get /user/scopes">client.user.scopes.<a href="./src/resources/user/scopes.ts">list</a>() -> ScopeListResponse</code>

## Membership

Methods:

- <code title="get /user/member/{scope}">client.user.membership.<a href="./src/resources/user/membership.ts">retrieve</a>(scope) -> ScopeMember</code>

## Invites

Types:

- <code><a href="./src/resources/user/invites.ts">InviteListResponse</a></code>

Methods:

- <code title="get /user/invites">client.user.invites.<a href="./src/resources/user/invites.ts">list</a>() -> InviteListResponse</code>
- <code title="post /user/invites/{scope}">client.user.invites.<a href="./src/resources/user/invites.ts">accept</a>(scope) -> ScopeMember</code>
- <code title="delete /user/invites/{scope}">client.user.invites.<a href="./src/resources/user/invites.ts">decline</a>(scope) -> void</code>

# Users

Methods:

- <code title="get /users/{id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(id) -> User</code>

## Scopes

Types:

- <code><a href="./src/resources/users/scopes.ts">ScopeListResponse</a></code>

Methods:

- <code title="get /users/{id}/scopes">client.users.scopes.<a href="./src/resources/users/scopes.ts">list</a>(id) -> ScopeListResponse</code>

# Authorizations

Types:

- <code><a href="./src/resources/authorizations/authorizations.ts">Authorization</a></code>
- <code><a href="./src/resources/authorizations/authorizations.ts">AuthorizationExchangeResponse</a></code>
- <code><a href="./src/resources/authorizations/authorizations.ts">CreateAuthorizationResponse</a></code>

Methods:

- <code title="post /authorizations/approve/{code}">client.authorizations.<a href="./src/resources/authorizations/authorizations.ts">approve</a>(code) -> void</code>
- <code title="post /authorizations/deny/{code}">client.authorizations.<a href="./src/resources/authorizations/authorizations.ts">deny</a>(code) -> void</code>
- <code title="post /authorizations/exchange">client.authorizations.<a href="./src/resources/authorizations/authorizations.ts">exchange</a>({ ...params }) -> AuthorizationExchangeResponse</code>
- <code title="post /authorizations">client.authorizations.<a href="./src/resources/authorizations/authorizations.ts">start</a>({ ...params }) -> CreateAuthorizationResponse</code>

## Details

Methods:

- <code title="get /authorizations/details/{code}">client.authorizations.details.<a href="./src/resources/authorizations/details.ts">retrieve</a>(code) -> Authorization</code>

# PublishingTasks

Types:

- <code><a href="./src/resources/publishing-tasks.ts">PublishingTask</a></code>

Methods:

- <code title="get /publishing_tasks/{id}">client.publishingTasks.<a href="./src/resources/publishing-tasks.ts">retrieve</a>(id) -> PublishingTask</code>

# Stats

Types:

- <code><a href="./src/resources/stats.ts">Stats</a></code>

Methods:

- <code title="get /stats">client.stats.<a href="./src/resources/stats.ts">retrieve</a>() -> Stats</code>
