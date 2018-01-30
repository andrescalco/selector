# Selector
> A simple JS boilerplate to use document.querySelector with $

## Installation

### NPM

```console
npm i --save @andre_scalco/selector
```

## Usage

### Single item - $

```js
import { $ } from '@andre_scalco/selector';
$('.your-document-item').some().dom(),method();
...
```

### Multiple items - _$

```js
import { _$ } from '@andre_scalco/selector';
let items = _$('.ul li');

[].filter.call(items, (obj) => {
    // do your stuff here
});
...
```