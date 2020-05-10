<p align="left">
  <img src="./assets/link-preview.png" alt="link-preview" width="100%">
</p>

# Vue Link Preview

A Vuejs component to fetch metadata from a URL and preview it 

Inspired by [link-preview-generator](https://github.com/AndrejGajdos/link-preview-generator) and [link-prevue](https://github.com/nivaldomartinez/link-prevue) 🙏

[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)
[![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ashwamegh/vue-link-preview/)
[![Build Status](https://travis-ci.org/ashwamegh/link-preview-vue.svg?branch=master)](https://travis-ci.org/github/ashwamegh/link-preview-vue)
[![npm version](https://badge.fury.io/js/link-preview-vue.svg)](https://www.npmjs.com/package/link-preview-vue)
[![Netlify Status](https://api.netlify.com/api/v1/badges/034f75bc-1190-436b-922e-07d0b284b9c3/deploy-status)](https://app.netlify.com/sites/link-preview/deploys)

## Demo

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Props](#props)
- [Events](#events)
- [Contribute](#contribute)
- [License](#license)

## Install

### NPM

```sh
npm install @ashwamegh/vue-link-preview
```

### Yarn

```sh
yarn add @ashwamegh/vue-link-preview
```

### UMD build

```html
<script src="https://unpkg.com/vue-link-preview@0.2.3/dist/vuelinkpreview.umd.js"></script>
```

## Usage

> Script

```javascript
import LinkPreview from '@ashwamegh/vue-link-preview'

export default {
  components:{
    LinkPreview
  },
  methods: {
    handleClick(preview) {
      console.log('click', preview.domain, preview.title, preview.description, preview.img)
    }
  }
}
```

> Template

```html
<div id="app">
  <vue-link-preview url="https://vuejs.org/" @click="handleClick"></vue-link-preview>
</div>
```

> With your own layout (With Vue Slots)

For replacing the Loader, you can add this html:

```html
<vue-link-preview url="https://vuejs.org/" @click="handleClick">
	<template v-slot:loader>
        loader...
    </template>
</vue-link-preview>
```

For replacing the content layout, you can use this:

```html
<template v-slot:default="preview">
	<div>
		<p>Domain: {{ preview.domain }}</p>
		<p>Title: {{ preview.title }}</p>
		<p>Description: {{ preview.description }}</p>
		<img height="100px" width="100px" :src="preview.img" :alt="preview.title ">
	</div>
</template>
```

## Props

| Property      | Type          | Default       | Description | Required |
| ------------- | ------------- | ------------- | ----------- | -------- |
| `url` | `string` |  | Width of the card preview | true |
| `width` | `string` | `90%` | Width of the card preview | false |
| `maxWidth` | `string` | `700px` | Max Width of the card preview | false |
| `marginTop` | `string` | `18px` | Margin top for the card | false |
| `marginBottom` | `string` | `18px` | Margin bottom for the card | false |
| `marginRight` | `string` | `18px` | Margin right for the card | false |
| `marginLeft` | `string` | `18px` | Margin left for the card | false |
| `canOpenLink` | `boolean` | `true` | Enables, to open link when clicked on card | false |

## Events

| Name      | Description |
| --------- | ----------- |
| `click` | It emits the preview data |

> Note: If you want to use `click` event without opening the url, then pass `:canOpenLink="false"` in the props

## Contribute

Thanks for taking the time to contribute, please check out the [src](src) to understand how things work.

### Reporting Issues

Found a problem? Want a new feature? First of all, see if your issue or idea has [already been reported](../../issues).
If don't, just open a [new clear and descriptive issue](../../issues/new).

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope and do avoid unrelated commits.

- Fork it!
- Clone your fork: `git clone https://github.com/<your-username>/vue-link-preview`
- Navigate to the newly cloned directory: `cd vue-link-preview`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `yarn`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes

## License

[MIT License](https://opensource.org/licenses/MIT) © [Shashank Shekhar](https://ashwamegh.github.io)
