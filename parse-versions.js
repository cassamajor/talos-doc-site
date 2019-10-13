const yaml = require('js-yaml');
const fs = require('fs');
try {
    const config = yaml.safeLoad(fs.readFileSync('config.yaml', 'utf8'));
    for(version of config.params.talosversions) {
        process.stdout.write(version.tag + " ");
    }
    process.stdout.write("\n");
} catch (e) {
    console.log(e);
}

