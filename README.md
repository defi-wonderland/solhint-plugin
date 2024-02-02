# DeFi Wonderland's Solhint Plugin

[![image](https://img.shields.io/npm/v/solhint-plugin-defi-wonderland.svg?style=flat-square)](https://www.npmjs.org/package/solhint-plugin-defi-wonderland)
![Tests](https://github.com/defi-wonderland/solhint-plugin/actions/workflows/unit-tests.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/defi-wonderland/solhint-plugin/blob/main/LICENSE)

## Deprecated
The plugin has been deprecated, we recommend using [`solhint-community`](https://github.com/solhint-community/solhint-community) instead.

## Overview

This custom Solhint Plugin aims to contain all of the Solidity best practices implemented at [DeFi Wonderland](https://defi.sucks).

## Setup

[Setup Solhint](TODO) in your Solidity project if you haven't already. Then run:

```sh
yarn add -D solhint-plugin-defi-wonderland
```

or

```sh
npm install --save-dev solhint-plugin-defi-wonderland
```

Finally, inside your `.solhint.json` configuration file, add:

```
"plugins": [..., "defi-wonderland"],
```

## Available Rules

| Name                                | Description                                                                          |
| ----------------------------------- | ------------------------------------------------------------------------------------ |
| `contract-data-order`               | Contracts storage members should be ordered: constants, immutable variables, others. |
| `enum-name-camelcase`               | Enums name should be in CamelCase.                                                   |
| `immutable-name-snakecase`          | Immutable variables names should be in capitalized SNAKE_CASE.                       |
| `import-statement-format`           | Imports should specify imported node. Example: `import {A} from 'b.sol'`             |
| `interface-member-order`            | Interfaces members should be ordered: events, errors, structs, enums, functions.     |
| `interface-starts-with-i`           | Interfaces name should start with `I`. Example: `IMyContract`.                       |
| `named-return-values`               | Functions return values should be named.                                             |
| `non-state-vars-leading-underscore` | Variables that are not in the state should start with underscore. Example: `_myVar`. |
| `struct-name-camelcase`             | Structs name should be in CamelCase.                                                 |
| `wonder-var-name-mixedcase`         | Public variables name must be in mixedCase.                                          |

---

## About DeFi Wonderland

[DeFi Wonderland](https://defi.sucks) is a team of top Web3 researchers, developers, and operators who believe that the future needs to be open-source, permissionless, and decentralized.

DeFi sucks, but DeFi Wonderland is here to make it better.
