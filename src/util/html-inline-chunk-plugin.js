/**
 * @name HTML内联插件
 * @description Webpack插件
 * @dependency html-webpack-plugin
 */

/* private */

const HtmlWebpackPlugin = require('html-webpack-plugin')

/* public */

/**
 * @name HTML内联插件
 */
class HtmlInlineChunkPlugin {
  /* construct */

  /**
   * @name 构造方法
   * @param {Object} htmlWebpackPlugin HTML模板插件
   */
  constructor(htmlWebpackPlugin) {
    this.htmlWebpackPlugin = htmlWebpackPlugin
  }

  /* private */

  /**
   * 
   * @param {*} publicPath 
   * @param {*} assets 
   * @param {*} tag 
   */
  getInlinedTag(publicPath, assets, tag) {
    if (tag.tagName !== 'script' || !(tag.attributes && tag.attributes.src)) {
      return tag
    }

    let scriptName = publicPath ? tag.attributes.src.replace(publicPath, '') : tag.attributes.src
    let asset = assets[scriptName]
    if (asset == null) {
      return tag
    }

    return { tagName: 'script', innerHTML: asset.source(), closeTag: true }
  }

  /* public */

  /**
   * @name 应用
   * @param {Object} compiler 编译器 
   */
  apply(compiler) {
    let publicPath = compiler.options.output.publicPath || ''
    if (publicPath && !publicPath.endsWith('/')) {
      publicPath += '/'
    }

    compiler.hooks.compilation.tap('InlineChunkHtmlPlugin', compilation => {
      const tagFunction = tag => this.getInlinedTag(publicPath, compilation.assets, tag)
      
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tap('InlineChunkHtmlPlugin', assets => {
        assets.headTags = assets.headTags.map(tagFunction)
        assets.bodyTags = assets.bodyTags.map(tagFunction)
      })
    })
  }
}

/* construct */

module.exports = HtmlInlineChunkPlugin