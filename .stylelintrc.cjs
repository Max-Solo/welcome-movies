module.exports = {
  extends: ["stylelint-config-standard-scss"],
  plugins: ['stylelint-order'],
  rules: {
    'order/order': [
      [
        'dollar-variables',
        {
          type: 'at-rule',
          name: 'extend',
        },
        {
          type: 'at-rule',
          name: 'include',
        },
        {
          type: 'at-rule',
          name: 'mixin',
        },
        'custom-properties',
        'declarations',
        {
          type: 'at-rule',
          name: 'media',
          hasBlock: true,
        },
        'rules',
      ],
    ],
    'order/properties-order': [
      {
        emptyLineBefore: 'always',
        properties: [
          'position',
          'top',
          'right',
          'bottom',
          'left',

          'flex',
          'align-self',
          'justify-self',
          'order',

          'z-index',

          'grid-area',
          'grid-row',
          'grid-row-start',
          'grid-row-end',
          'grid-column',
          'grid-column-start',
          'grid-column-end',

          'width',
          'min-width',
          'max-width',
          'height',
          'min-height',
          'max-height',

          'flex-basis',
          'flex-grow',
          'flex-shrink',

          'margin',
          'margin-top',
          'margin-right',
          'margin-bottom',
          'margin-left',

          'float',
          'clear',
        ],
      },

      // Стили блока
      {
        emptyLineBefore: 'always',
        properties: [
          'visibility',
          'opacity',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'content',
          'quotes',
          'cursor',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'display',
          'vertical-align',
        ],
      },
      {
        properties: [
          'flex-flow',
          'flex-direction',
          'flex-wrap',
          'align-content',
          'align-items',
          'justify-content',
          'justify-items',
        ],
      },
      {
        properties: [
          'grid',
          'grid-template',
          'grid-template-areas',
          'grid-template-rows',
          'grid-template-columns',
          'grid-auto-rows',
          'grid-auto-columns',
          'grid-auto-flow',
          'grid-gap',
          'grid-row-gap',
          'grid-column-gap',
        ],
      },
      {
        properties: [
          'columns',
          'column-gap',
          'column-fill',
          'column-rule',
          'column-rule-width',
          'column-rule-style',
          'column-rule-color',
          'column-span',
          'column-count',
          'column-width',
        ],
      },
      {
        properties: [
          'padding',
          'padding-top',
          'padding-right',
          'padding-bottom',
          'padding-left',
        ],
      },
      {
        properties: [
          'box-sizing',
          'overflow',
          'overflow-x',
          'overflow-y',
          'resize',
        ],
      },
      {
        properties: [
          'outline',
          'outline-offset',
          'outline-width',
          'outline-style',
          'outline-color',
          'border',
          'border-top',
          'border-right',
          'border-bottom',
          'border-left',
          'border-width',
          'border-top-width',
          'border-right-width',
          'border-bottom-width',
          'border-left-width',
          'border-style',
          'border-top-style',
          'border-right-style',
          'border-bottom-style',
          'border-left-style',
          'border-radius',
          'border-top-left-radius',
          'border-top-right-radius',
          'border-bottom-left-radius',
          'border-bottom-right-radius',
          'border-color',
          'border-top-color',
          'border-right-color',
          'border-bottom-color',
          'border-left-color',
          'border-image',
          'border-image-source',
          'border-image-width',
          'border-image-outset',
          'border-image-repeat',
          'border-image-slice',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'background',
          'background-attachment',
          'background-clip',
          'background-color',
          'background-image',
          'background-origin',
          'background-position',
          'background-repeat',
          'background-size',
        ],
      },
      {
        properties: [
          'color',
        ],
      },
      {
        properties: [
          'box-shadow',
        ],
      },
      {
        properties: [
          'list-style',
          'list-style-type',
          'list-style-position',
          'list-style-image',
          'caption-side',
        ],
      },
      {
        properties: [
          'counter-reset',
          'counter-increment',
        ],
      },
      {
        properties: [
          'table-layout',
          'border-collapse',
          'border-spacing',
          'empty-cells',
        ],
      },
      {
        properties: [
          'direction',
          'tab-size',
          'text-align',
          'text-align-last',
          'text-justify',
          'text-indent',
          'text-transform',
          'text-decoration',
          'text-decoration-color',
          'text-decoration-line',
          'text-decoration-style',
          'text-rendering',
          'text-shadow',
          'text-overflow',
        ],
      },
      {
        properties: [
          'font',
          'font-family',
          'font-size',
          'font-size-adjust',
          'font-stretch',
          'font-weight',
          'font-smoothing',
          'osx-font-smoothing',
          'font-variant',
          'font-style',
        ],
      },
      {
        properties: [
          'line-height',
          'word-spacing',
          'letter-spacing',
          'white-space',
          'word-break',
          'word-wrap',
        ],
      },
      {
        properties: [
          'page-break-before',
          'page-break-after',
          'page-break-inside',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'backface-visibility',
          'perspective',
          'perspective-origin',
          'transform',
          'transform-origin',
          'transform-style',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'transition',
          'transition-delay',
          'transition-duration',
          'transition-property',
          'transition-timing-function',
        ],
      },
      {
        emptyLineBefore: 'always',
        properties: [
          'animation',
          'animation-name',
          'animation-duration',
          'animation-timing-function',
          'animation-delay',
          'animation-iteration-count',
          'animation-direction',
          'animation-fill-mode',
          'animation-play-state',
        ],
      },
    ],
  }
}




