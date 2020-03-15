import frontmatter from 'front-matter';
import Showdown from 'showdown';
import parsePath from 'parse-filepath';
import fs from 'fs';
import mkdirp from 'mkdirp';

const converter = new Showdown.Converter();

main();

function main() {
  const posts = fs.readdirSync('./content/posts');

  const files = [];

  for (const post of posts) {
    if (/.md$/.test(post)) {
      const data = fs.readFileSync(`./content/posts/${post}`, 'utf-8');
      const json = frontmatter(data);
      const html = converter.makeHtml(json.body);

      if (!fs.existsSync('./content/dist/posts')) {
        mkdirp.sync('./content/dist/posts', {recursive: true});
      }

      const fileName = parsePath(post).name;

      fs.writeFileSync(`./content/dist/posts/${fileName}.json`, JSON.stringify({...json, html}, null, 2));

      files.push(fileName);
    }
  }

  let source = ``;

  for (const fileName of files) {
    source += `import ${fileName} from './${fileName}.json';\n`;
  }

  source += `\nexport const posts  = [${files.join(', ')}];`;

  fs.writeFileSync(`./content/dist/posts/index.ts`, source);
}
