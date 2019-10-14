# Talos Documentation

Talos documentation is split into two parts:

1. This repository, which is a [Hugo](https://gohugo.io) theme and associated tools to generate the static
   documentation site.
2. The actual documentation content, which lives in the main [Talos repository](https://github.com/talos-systems/talos/tree/master/docs/content).

## Local development

Set up a  local toolchain and build a single version of the docs this way:

```
git submodule update --init --recursive
yarn install
yarn run dev
```

Once Yarn is running, you should be able to access the test site at http://localhost:3000/.

The documentation content lives in the `talos` repository and is pulled into this site
generator via a Git submodule.

The build.sh script builds multiple versions of the documentation and does a little bit of
post-processing to publish the site to Netlify. The versions to be built are specified in
`config.yaml`. This script will usually be called automatically by Netlify, and if you are
just making documentation changes, you don't need to use it.
