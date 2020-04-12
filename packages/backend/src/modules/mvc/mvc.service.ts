import {parsedContentPostsDir, bundleDistDir} from '../../constants';
import {Injectable} from '@nestjs/common';
import fs from 'fs';

@Injectable()
export class MvcService {
  public async buildIndexHtml() {
    const mapContentPostsDir = fs.readdirSync(parsedContentPostsDir);
    const contentPostsImports = mapContentPostsDir.map(post => import(`${parsedContentPostsDir}/${post}`));
    const parsedContentPosts = await Promise.all(contentPostsImports);

    const env = JSON.stringify({posts: parsedContentPosts});
    const bundle = fs.readFileSync(`${bundleDistDir}/bundle.js`, 'utf-8');

    return {env, bundle};
  }
}
