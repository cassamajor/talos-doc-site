# talos-systems.com


## Quickstart development

If you are not changing CSS or JS, you can bypass this instruction and run `hugo serve --gc`.

`yarn install`  
`yarn start`

## Deployment

1. **Before deploying, run `yarn deploy` (or `hugo --gc` if you're not generating fonts or JS) to generate a minified, purged CSS file.**
2. Check the `resources` folder into your repository.


## tools

- [Hugo](http://gohugo.io/), a general purpose website framework
- [Webpack](https://webpack.js.org) - A web application bundler.
- [PostCSS](https://postcss.org/)
- [TailwindsCSS](https://tailwindcss.com/) (library of JS-based CSS classes )
- [PurgeCSS](https://www.purgecss.com/) (removes unused CSS)
- [Quicklink](https://github.com/GoogleChromeLabs/quicklink/) Pre-fetch links on a page
- [Lazysizes](https://github.com/aFarkas/lazysizes) (lazy asset loading)
- [KyleAMathews/typefaces](https://github.com/KyleAMathews/typefaces) (load OS fonts locally with one little `require`)
- [HTMLTest](https://github.com/wjdp/htmltest) - A Go-based link HTML linter for links, images, scripts references.



### Fonts

When possible, we use Kyle Mathews' [Typefaces](https://github.com/KyleAMathews/typefaces) so that we can server our font files locally. Just add the typeface to `assets/index.js` and run the webpack build, as above (`yarn build`). This will generate the font files into the `static/fonts` directory (which Hugo will automatically copy into the public directory) and generate a fonts CSS file, which then Hugo will minify and fingerprint into your head.

### CSS

We use TailwindCSS and several PostCSS plugins to generate CSS. Most of your CSS will be utility classes in your templates. Tailwind answers the question, "will the change I'm making now break styles I or someone else made in the past." The answer is always no.

## JS

- Uses Webpack.
- Webpack is used to fingerprint assets.
- Webpack outputs to `static/dist/...` and creates a manifest file in the `data` folder, which Hugo reads.


## Fonts

- Open source fonts via [Typefaces](https://github.com/KyleAMathews/typefaces) uses Parcel Bundler.
- Parcel outputs CSS to `assets/output/index.css` and also puts the font files, hashed, in the same directory.
- Hugo Pipes processes files into public directory and create Prefetch links.
  - If `fileExists "./assets/output/index.css` Hugo creates the prefetch links from `layouts/_head/stylesheets.html`.
- Hugo outputs the processed fonts and CSS file to `public/output/index.min.[hash].css` and `public/output/font-name.[hash].woff[2]`.


## Testing

Download htmltest to your local environment, build your site locall (to the public folder), and run `htmltest` in your site's path. If you need to change any parameters of the test, you'll find them in `.htmltest.yml`


## Images

- Assets stored in the `assets/images` folder and are processed by Hugo https://gohugo.io/content-management/image-processing

### Other Notes

- PurgeCSS will fail if any of your templates are empty.
- If you add themes, you may need to add the file location in the PurgeCSS `content` configuration item. This is done for you, with a glob pattern, but it is something to be aware of.

