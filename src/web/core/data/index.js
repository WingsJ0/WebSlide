/**
 * @name 数据
 */

/* private */

import Directory from '../../../../#temp/directory';

/* public */

let data = [] // [{template, script, style}]

/* construct */

let domParser = new DOMParser();

for (let el of Directory) {
  let doc = domParser.parseFromString(el, 'text/html')
  let template = doc.querySelector('template')
  let script = doc.querySelector('script')
  let style = doc.querySelector('style')

  data.push({
    template: template && template.innerHTML || '',
    script: script && script.innerHTML || '',
    style: style && style.innerHTML || ''
  })
}

export default data