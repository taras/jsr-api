# Changelog

## 0.1.0-alpha.1 (2025-04-05)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/taras/jsr-api/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### ⚠ BREAKING CHANGES

* **client:** uri encode path parameters ([#5](https://github.com/taras/jsr-api/issues/5))

### Features

* add SKIP_BREW env var to ./scripts/bootstrap ([#25](https://github.com/taras/jsr-api/issues/25)) ([df57f1e](https://github.com/taras/jsr-api/commit/df57f1e428e33cff7ca76c174a678df89aae8196))
* **client:** accept RFC6838 JSON content types ([#26](https://github.com/taras/jsr-api/issues/26)) ([279d930](https://github.com/taras/jsr-api/commit/279d93080186883fdf838fce2d59f9c81c3187d4))
* **client:** improve logging ([#12](https://github.com/taras/jsr-api/issues/12)) ([739d24c](https://github.com/taras/jsr-api/commit/739d24caed639e39e49bdad577bf438ab623289e))
* **client:** send `X-Stainless-Timeout` header ([#4](https://github.com/taras/jsr-api/issues/4)) ([13c7cf8](https://github.com/taras/jsr-api/commit/13c7cf83689194d353fa8872aaeb57b98e0be9d4))


### Bug Fixes

* **api:** improve type resolution when importing as a package ([#36](https://github.com/taras/jsr-api/issues/36)) ([b649f44](https://github.com/taras/jsr-api/commit/b649f444f944f7454d56f140db814aaf6080627b))
* **client:** fix export map for index exports, accept BunFile ([#10](https://github.com/taras/jsr-api/issues/10)) ([d7c0055](https://github.com/taras/jsr-api/commit/d7c00559293ab3440a8845f35c45b94aa888f558))
* **client:** fix TypeError with undefined File ([#20](https://github.com/taras/jsr-api/issues/20)) ([274a652](https://github.com/taras/jsr-api/commit/274a652efd1a537c701c2503018c65bb59550568))
* **client:** send `X-Stainless-Timeout` in seconds ([#34](https://github.com/taras/jsr-api/issues/34)) ([2d27e28](https://github.com/taras/jsr-api/commit/2d27e280864c67631ba5614968bb09769f8b3f7d))
* **client:** uri encode path parameters ([#5](https://github.com/taras/jsr-api/issues/5)) ([69cae52](https://github.com/taras/jsr-api/commit/69cae52ed97e6639e4f23edeb015e431f58f1973))
* **exports:** ensure resource imports don't require /index ([#28](https://github.com/taras/jsr-api/issues/28)) ([b84f0ec](https://github.com/taras/jsr-api/commit/b84f0ec9c3ae12e41bf2a203e996f2bbd874f8e7))
* **internal:** add mts file + crypto shim types ([#29](https://github.com/taras/jsr-api/issues/29)) ([1038004](https://github.com/taras/jsr-api/commit/1038004e12a3e9cfbe208b4722ad73de93dc61bd))
* **internal:** clean up undefined File test ([#21](https://github.com/taras/jsr-api/issues/21)) ([fd2f1b7](https://github.com/taras/jsr-api/commit/fd2f1b7de69fba5363b2022b6db3c397719267c0))
* **internal:** return in castToError instead of throwing ([#14](https://github.com/taras/jsr-api/issues/14)) ([c99f691](https://github.com/taras/jsr-api/commit/c99f691321552f6f8bd645e80b422a1f71de6bff))
* **mcp:** remove unused tools.ts ([#37](https://github.com/taras/jsr-api/issues/37)) ([d2619e2](https://github.com/taras/jsr-api/commit/d2619e2fcd723e094c2d087033ed5674ffe8525c))
* **tests:** manually reset node:buffer File ([#22](https://github.com/taras/jsr-api/issues/22)) ([114204a](https://github.com/taras/jsr-api/commit/114204a4b8663ca0f66340c3106b41bfb249e17f))


### Chores

* **client:** move misc public files to new `core/` directory, deprecate old paths ([#33](https://github.com/taras/jsr-api/issues/33)) ([7c1216e](https://github.com/taras/jsr-api/commit/7c1216e9ff60591a26c508463c4e0fc9938fb9e2))
* **client:** only accept standard types for file uploads ([#17](https://github.com/taras/jsr-api/issues/17)) ([2fe42c1](https://github.com/taras/jsr-api/commit/2fe42c10fe86988acda5e77d75acffba3b5a781f))
* **exports:** cleaner resource index imports ([#31](https://github.com/taras/jsr-api/issues/31)) ([310964d](https://github.com/taras/jsr-api/commit/310964d6d187d9a0b8b47fc3d0b3894b277ca4ec))
* **exports:** stop using path fallbacks ([#32](https://github.com/taras/jsr-api/issues/32)) ([2c09914](https://github.com/taras/jsr-api/commit/2c09914efacfb43c35d7cc9bf317ef4164416931))
* go live ([#1](https://github.com/taras/jsr-api/issues/1)) ([e9a31fb](https://github.com/taras/jsr-api/commit/e9a31fb3f5ba82a197ddaf9872a43a2e9004ac5a))
* **internal:** add aliases for Record and Array ([#35](https://github.com/taras/jsr-api/issues/35)) ([908c46f](https://github.com/taras/jsr-api/commit/908c46f76e74f69f2448ffb259f5bd41f93baf64))
* **internal:** codegen related update ([#24](https://github.com/taras/jsr-api/issues/24)) ([3742b97](https://github.com/taras/jsr-api/commit/3742b97998c0202b0db553300eaf1542318e00ad))
* **internal:** constrain synckit dev dependency ([#19](https://github.com/taras/jsr-api/issues/19)) ([046a275](https://github.com/taras/jsr-api/commit/046a275aa0e9784358042409807a5ea878ac2f44))
* **internal:** fix devcontainers setup ([#13](https://github.com/taras/jsr-api/issues/13)) ([df64e7a](https://github.com/taras/jsr-api/commit/df64e7af3df1355103d9b8d2677326882adc8fd2))
* **internal:** fix tests failing on node v18 ([#18](https://github.com/taras/jsr-api/issues/18)) ([ac58cad](https://github.com/taras/jsr-api/commit/ac58cad449ddd5c93718dab8a940a19dd06d1268))
* **internal:** fix tests not always being type checked ([#11](https://github.com/taras/jsr-api/issues/11)) ([dc25346](https://github.com/taras/jsr-api/commit/dc253467f7d59489a73640d893a70e6320f5ddc4))
* **internal:** migrate to eslint v9 ([#8](https://github.com/taras/jsr-api/issues/8)) ([b1897ca](https://github.com/taras/jsr-api/commit/b1897ca1f07038c6cde118af1ce83bbedf1512be))
* **internal:** minor client file refactoring ([#30](https://github.com/taras/jsr-api/issues/30)) ([a6c5b4f](https://github.com/taras/jsr-api/commit/a6c5b4f45a355a428612d62f4767ad2651455c5e))
* **internal:** remove extra empty newlines ([#27](https://github.com/taras/jsr-api/issues/27)) ([cd37e92](https://github.com/taras/jsr-api/commit/cd37e92c0c2aff088d6f80ed3a7f31347b79fa5c))
* **internal:** remove unnecessary todo ([#15](https://github.com/taras/jsr-api/issues/15)) ([fb52909](https://github.com/taras/jsr-api/commit/fb5290916c74a4ecc26db8eed1ac89044bdf6ca4))
* **internal:** remove unused `isRequestOptions()` function ([#3](https://github.com/taras/jsr-api/issues/3)) ([773db92](https://github.com/taras/jsr-api/commit/773db92c7e69550fc52711da6f5df962f0b82273))
* **internal:** remove unused method ([#7](https://github.com/taras/jsr-api/issues/7)) ([839a7ae](https://github.com/taras/jsr-api/commit/839a7ae2eed8a5d3448dca8d3dfe8d5971e69af6))
* **internal:** update eslint config ([#9](https://github.com/taras/jsr-api/issues/9)) ([81ac905](https://github.com/taras/jsr-api/commit/81ac905bab14173b8710fdddeefe3abfb3ad6359))
* minor change to tests ([#6](https://github.com/taras/jsr-api/issues/6)) ([1c15371](https://github.com/taras/jsr-api/commit/1c15371a99575bbe74886b6566fdc94e8bc064d7))
* **types:** improved go to definition on fetchOptions ([#23](https://github.com/taras/jsr-api/issues/23)) ([31c13d0](https://github.com/taras/jsr-api/commit/31c13d04021e607bde8d6f700f312a796e3e9bf7))


### Documentation

* update URLs from stainlessapi.com to stainless.com ([#16](https://github.com/taras/jsr-api/issues/16)) ([978eeb0](https://github.com/taras/jsr-api/commit/978eeb075c5bd7dc959b29790e04ab53245b109a))
