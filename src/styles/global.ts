import { css } from '@emotion/react';

export const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  blockquote,
  body,
  button,
  code,
  dd,
  div,
  dl,
  dt,
  fieldset,
  form,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  legend,
  li,
  ol,
  p,
  pre,
  select,
  td,
  textarea,
  th,
  ul {
    margin: 0;
    padding: 0;
  }

  fieldset,
  img {
    border: 0;
  }
  a {
    cursor: pointer;
    text-decoration: none;
  }
  dl,
  li,
  menu,
  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:after,
  blockquote:before,
  q:after,
  q:before {
    content: '';
    content: none;
  }

  button,
  input,
  select,
  textarea {
    vertical-align: middle;

    font-size: inherit;
  }

  button {
    border: 0;

    background-color: transparent;

    cursor: pointer;
  }

  table {
    border-spacing: 0;
    border-collapse: collapse;
  }

  body {
    -webkit-text-size-adjust: none;

    background: var(--baseBackground);
  }

  html input[type='button'],
  input[type='email'],
  input[type='password'],
  input[type='reset'],
  input[type='search'],
  input[type='submit'],
  input[type='tel'],
  input[type='text'] {
    -webkit-appearance: none;
    appearance: none;
    @layer default {
      & {
        border-radius: 0;
      }
    }
  }

  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  body,
  button,
  input,
  select,
  td,
  textarea,
  th {
    font-weight: inherit;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.5;
  }

  a,
  a:active,
  a:hover {
    text-decoration: none;
  }

  caption,
  cite,
  code,
  dfn,
  em,
  var {
    font-weight: inherit;
    font-style: normal;
  }

  body {
    color: libs.$BLUISH-GRAY-800;
    font-family:
      'Pretendard Variable',
      Pretendard,
      system-ui,
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Roboto,
      Oxygen,
      Ubuntu,
      Cantarell,
      'Open Sans',
      'Helvetica Neue',
      sans-serif;
  }

  html {
    font-size: 16px;
  }
`;
