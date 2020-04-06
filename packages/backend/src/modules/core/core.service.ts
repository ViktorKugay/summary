import {Injectable} from '@nestjs/common';
import {buildIndexHtml} from '../../utils/buildIndexHtml';
import fs from 'fs';

const postsDir = `${__dirname}/../../../../../content/dist`;
const distDir = `${__dirname}/../../../../../dist`;

@Injectable()
export class CoreService {
  public async serveIndexHtml() {
    const dir = fs.readdirSync(postsDir);

    const postsPromises = dir.map(post => import(`${postsDir}/${post}`));

    const posts = await Promise.all(postsPromises);

    const env = {posts};

    const bundle = fs.readFileSync(`${distDir}/bundle.js`, 'utf-8');

    return buildIndexHtml({env, bundle});
  }
}
