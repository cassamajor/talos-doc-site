#!/bin/bash

# List the git versions of the docs you want to build here:
versions_to_deploy=$(node ./parse-versions.js)

for v in ${versions_to_deploy[@]}
do
	cd docs && git checkout $v && cd ..
	HUGO_BASEURL=/$v/ HUGO_PUBLISHDIR=workdir/$v/ HUGO_PARAMS_TALOSDOCSVERSION=$v yarn deploy
        mkdir -p public/
        rm -rf public/$v
        mv workdir/$v public/

        # copy the version-independent assets out into the web root
        cp -v public/master/{*.png,*.svg,*.ico,*.xml,*.webmanifest,*.txt} public/
done
