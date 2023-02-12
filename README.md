# DeFi Wonderland's Solhint Plugin

[![image](https://img.shields.io/npm/v/@defi-wonderland/solhint-plugin.svg?style=flat-square)](https://www.npmjs.org/package/@defi-wonderland/solhint-plugin)
![Tests](https://github.com/defi-wonderland/solhint-plugin/actions/workflows/unit-tests.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/defi-wonderland/solhint-plugin/blob/main/LICENSE)

## Overview

This custom Solhint Plugin aims to contain all of the Solidity best practices implemented at [DeFi Wonderland](https://defi.sucks).

## Setup

[Setup Solhint](TODO) in your Solidity project if you haven't already. Then run:

```sh
yard add -D @defi-wonderland/solhint-plugin
```

or

```sh
npm install --save-dev @defi-wonderland/solhint-plugin
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
| `interface-member-order`            | Interfaces members should be ordered: events, errors, structs, functions.            |
| `interface-starts-with-i`           | Interfaces name should start with `I`. Example: `IMyContract`.                       |
| `named-return-values`               | Functions return values should be named.                                             |
| `non-state-vars-leading-underscore` | Variables that are not in the state should start with underscore. Example: `_myVar`. |
| `struct-name-camelcase`             | Structs name should be in CamelCase.                                                 |

---

## About DeFi Wonderland

[DeFi Wonderland](https://defi.sucks) is a team of top Web3 researchers, developers, and operators who believe that the future needs to be open-source, permissionless, and decentralized.

DeFi sucks, but DeFi Wonderland is here to make it better.
