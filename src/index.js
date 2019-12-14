#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib = require("@frenchex/create-npm-lib-lib");
const path = require("path");
const logger = require('@log4js-node/log4js-api').getLogger();
const npmCreate = new lib.NpmCreate(logger);
(async () => {
    await npmCreate.create({
        gitBin: process.env.git_bin || await lib.which('git'),
        npmBin: process.env.npm_bin || await lib.which('npm'),
        path: process.env.working_directory || process.cwd(),
        branch: process.env.branch || 'develop',
        name: process.env.name || path.basename(process.cwd()),
        packageJson: {
            main: 'src/index.js',
            homepage: "",
            license: "",
            publishConfig: {
                "access": "public"
            },
            repository: {
                type: "git",
                url: ""
            },
            scripts: [
                { name: 'dev', script: 'tsc -w' },
                { name: 'build', script: 'tsc' },
            ],
            devDependencies: [
                { name: 'typescript', version: { prefix: '*' } },
                { name: 'ts-node', version: { prefix: '*' } },
                { scope: 'types', name: 'node', version: { prefix: '*' } },
                { scope: 'types', name: 'mocha', version: { prefix: '*' } },
                { scope: 'types', name: 'chai', version: { prefix: '*' } },
                { name: 'mocha', version: { prefix: '*' } },
                { name: 'chai', version: { prefix: '*' } },
                { name: 'release-it', version: { prefix: '*' } },
            ]
        },
        scope: process.env.scope || path.basename(path.join(process.cwd(), '..')),
        version: { major: 0, minor: 0, patch: 1 }
    });
})();
//# sourceMappingURL=index.js.map