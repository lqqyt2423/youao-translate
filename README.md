Youdao Translate Nodejs Api
==========

[有道智云翻译 API](https://ai.youdao.com/docs/doc-trans-api.s) NODEJS 实现版本

## Install

```bash
npm install @liqiqiang/youdao-translate --save
```

## Usage

```javascript
const Translate = require('@liqiqiang/youdao-translate');
const translate = new Translate(yourAppKey, yourAppSecret);

(async () => {
  // auto en to zh
  let res = await translate.t('hello world');
  // auto zh to en
  res = await translate.t('你好，世界');
  // specified translate action
  res = await translate.t('hello world', { from: 'EN', to: 'zh-CHS' })
})();
```

## Output Example

```json
{
  "tSpeakUrl": "http://openapi.youdao.com/ttsapi?q=%E4%BD%A0%E5%A5%BD%EF%BC%8C%E4%B8%96%E7%95%8C&langType=zh-CHS&sign=F5A45326CD3A0042EBF2B874B5810A2D&salt=1543297510723&voice=4&format=mp3&appKey=7e91853541b3c35e",
    "web": [
      {
        "value": [
          "你好世界",
          "开始",
          "别来无恙",
          "举个例子"
        ],
        "key": "hello world"
      },
      {
        "value": [
          "凯蒂猫气球世界"
        ],
        "key": "Hello Kitty World"
      },
      {
        "value": [
          "每天一歌"
        ],
        "key": "Hello Cold World"
      }
    ],
      "query": "hello world",
        "translation": [
          "你好，世界"
        ],
          "errorCode": "0",
            "dict": {
    "url": "yddict://m.youdao.com/dict?le=eng&q=hello+world"
  },
  "webdict": {
    "url": "http://m.youdao.com/dict?le=eng&q=hello+world"
  },
  "basic": {
    "uk-speech": "http://openapi.youdao.com/ttsapi?q=hello+world&langType=en&sign=AB2A282CD0789E891C1436AE36522783&salt=1543297510723&voice=5&format=mp3&appKey=7e91853541b3c35e",
      "explains": [
        "你好世界"
      ],
        "us-speech": "http://openapi.youdao.com/ttsapi?q=hello+world&langType=en&sign=AB2A282CD0789E891C1436AE36522783&salt=1543297510723&voice=6&format=mp3&appKey=7e91853541b3c35e"
  },
  "l": "EN2zh-CHS",
    "speakUrl": "http://openapi.youdao.com/ttsapi?q=hello+world&langType=en&sign=AB2A282CD0789E891C1436AE36522783&salt=1543297510723&voice=4&format=mp3&appKey=7e91853541b3c35e"
}
```
