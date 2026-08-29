
---
name: Repository Structure
description: This skill explains the repository is structured and where the agent can find what.
---

# Repository Structure

## Git
This repository is managed via Git. This means there should only be one .gitignore file in the root of the repository. The .gitignore file should be used to ignore files that are not needed in the repository, such as build artifacts, temporary files, and sensitive information.

## .github
This folder contains relevant .yaml files and scripts for GitHub actions. It also contains a folder called workflows, which contains the workflow files for GitHub actions.

## src
This folder contains all of the source code for the applications within this repository. Currently there are two applications which are relevant: TGC.RegardedStonks.App and TGC.RegardedStonks.Api. The first is the frontend application, and the second is the backend application. There are older applications called StockGame.Api and StockGame.App, which are no longer relevant and should not be used.

## Terraform
This folder contains all terraform code for deploying infrastructure and generating YAML files for K8.