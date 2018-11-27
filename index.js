'use strict';

const rp = require('request-promise');
const crypto = require('crypto');

const api = 'http://openapi.youdao.com/api';

class Translate {
  constructor(appKey, appSecret) {
    if (!appKey || !appSecret) throw new Error('请传入正确的参数');
    this.appKey = appKey;
    this.appSecret = appSecret;
  }

  async t(q, options = {}) {
    if (!q) throw new Error('required q');

    // 随机数
    const salt = Math.random().toString(36).replace('0.', '');
    // sign
    const sign = crypto.createHash('md5').update(this.appKey + q + salt + this.appSecret).digest('hex');

    options = {
      q,
      from: 'auto',
      to: 'auto',
      appKey: this.appKey,
      salt,
      sign,
      ...options,
    }

    const tmpArr = Object.keys(options).map(k => {
      const v = options[k];
      return k + '=' + encodeURIComponent(v);
    });
    const tmpStr = tmpArr.join('&');
    const endpoint = api + '?' + tmpStr;

    const res = await rp(endpoint, { json: true });
    return res;
  }
}

module.exports = Translate;
