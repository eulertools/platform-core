# platform-core

Lerna monorepo: shared CDK constructs + blockchain collectors. Archived snapshot, as-is.

This tree is a **new public commit** with no git history. The original private archive is `eulertools/platform-core-archive`.

Generated `cdk.context.json` (VPC, subnets, SSM-cached p2pify URLs, AWS account) was **removed**. NodeReal and p2pify RPC keys in `packages/collectors/bin/stacks/platform-helpers.ts` were replaced with public seeds. **Rotate those NodeReal / p2pify keys** if they are still live (they remain in the private archive).

No contract deployments recorded in this repo.

## What was built (EN)

platform-core is a Lerna monorepo that serves as the shared foundation package for the broader Euler platform infrastructure. It contains two main workspaces: `cdk-constructs`, which provides reusable AWS CDK building blocks for cloud infrastructure, and `collectors`, a standalone CDK project for blockchain data extraction from EVM chains.

## Qué se construyó (ES)

Monorepo Lerna con constructs CDK compartidos y collectors de datos on-chain. Contexto CDK de AWS eliminado.

---

## Notice / Aviso

**Euler Tools ha cerrado. Euler Tools is closed.**

La empresa quebró. Este repositorio está archivado y no se mantiene. El software se ofrece tal cual (as is), sin garantía ni soporte. Parte del material puede ser reclamado por acreedores.

The company went bankrupt. This repository is archived and unmaintained. Software is provided as is, with no warranty and no support. Some material may be claimed by creditors.

Site: https://euler.tools  
Org: https://github.com/eulertools  
Enquiries: https://sinequix.com · https://github.com/tebayoso
