# System Design Dashboard Vue App :: Prerequisites & Setup <!-- omit in toc -->

## Table of Contents

<!-- TOC -->

- [Table of Contents](#table-of-contents)
- [Common Prerequisites & Setup](#common-prerequisites--setup)

<!-- /TOC -->

## Common Prerequisites & Setup

### Linux/Mac

Minimal system dependencies to run the project:

- [Node & NPM](https://nodejs.org/en/) : `brew install node` or [install with NVM](https://github.com/creationix/nvm)

### Windows

NVM package is for linux/mac machines, a work-around for windows is using nvm-windows which is a different project to NVM but will facilitate switching between node versions.

 **Note:** it is recommended to uninstall node and npm before installing a version manager (see how to remove [node.js from windows](https://stackoverflow.com/questions/20711240/how-to-completely-remove-node-js-from-windows)) as strange conflicts may arise when installing a node version.

 The following instructions are based on [microsoft docs](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows)
 1. Open the [nvm-windows repository](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows) in your internet browser and select the [Download Now](https://github.com/coreybutler/nvm-windows/releases) link to download the nvm-setup.zip file.
 2. After installing windows-nvm through the setup wizard, run `nvm ls` to check what version is installed. The result should be nothing on first installation.
 3. Check the .node_version file for a version and install it using `nvm install <version>`. Running `nvm ls` again will show the installed node versions. To check available node versions for installation, run `nvm list available`.
 4. To use a node version, run `nvm use <version>`.  


**[⬆ back to top](#table-of-contents)**
