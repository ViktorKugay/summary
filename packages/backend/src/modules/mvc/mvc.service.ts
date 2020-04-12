import {bundleDistDir} from '../../constants';
import {Injectable} from '@nestjs/common';
import fs from 'fs';

@Injectable()
export class MvcService {
  public async buildIndexHtml() {
    const bundle = fs.readFileSync(`${bundleDistDir}/bundle.js`, 'utf-8');

    return {bundle};
  }
}
