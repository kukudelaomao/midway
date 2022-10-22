---
title: 简易模式 & 文件系统路由
---

## Simple mode

In Midway Hooks, we provide a simple mode that can use pure functions to quickly create interfaces.

📢Note:

- In the simple mode, you must enable the file routing system. You must enable the `routes` configuration in `midway.config.js`.
- null``````
- In simple mode, `Api()` can still be used to define routes, and manual path definition is supported. `basePath` will be added to the spliced path automatically.

### Get request

```ts
import { useContext } from '@midwayjs/hooks';

export async function getPath() {
  // Get HTTP request context by Hooks
  const ctx = useContext();
  return ctx.path;
}
```

Integrated call:

```ts
import { getPath } from './api/lambda';
const path = await getPath();
console.log(path); // /api/getPath
```

Manual call:

```ts
fetcher
  .get('/api/getPath')
  .then((res) => {
    console.log(res.data); // /api/getPath
  });
```

### Post request

```ts
import { useContext } from '@midwayjs/hooks';

export async function post (
  name: string
) {
  const ctx = useContext();

  return {
    message: 'Hello ${name}!',
    method: ctx.method
  };
}
```

Integrated call:

```ts
import { post } from './api/lambda';
const response = await post('Midway');
console.log(response.data); // { message: 'Hello Midway!', method: 'POST'}
```

null

```ts
fetch('/api/post', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify ({
    args: ['Midway']
  }),
null
  console.log(res.data); // { message: 'Hello Midway!', method: 'POST'}
});
```

### Create a route by using `Api()`

In simple mode, you can still use `Api()` to create routes.

Invalid example: `Api(Get('/specify_path'))`. Manual path specification is not supported in simple mode.

A valid example, two routes are exported.

```ts
import {
  Api
  Get
} from '@midwayjs/hooks';
import { useContext } from '@midwayjs/hooks';

export async function getPath() {
  // Get HTTP request context by Hooks
  const ctx = useContext();
  return ctx.path;
}

export default Api(Get(), async () => {
  null
});
```

## File system routing

Enable the `routes` configuration in `midway.config.js` to enable the file routing system and easy mode.

The configuration example is as follows:

```ts
import { defineConfig } from '@midwayjs/hooks';

export default defineConfig ({
  source: './src/apis',
  routes: [
    {
      baseDir: 'lambda',
      basePath: '/api',
    },
  ],
});
```

Field explanation:

- source: The backend directory. Default value: `./src/apis`. You can also specify custom directories such as `./src/functions`.
- routes: routing configuration. the default is an array.
   - baseDir: Function folder, asynchronous functions exported from any `.ts` file under the folder will be generated as Api interface
   - basePath: generated Api address prefix

### Index routing

The `index.ts` file in the directory is used as the root route.

- `/lambda/index.ts` →`/`
- `/lambda/about/index.ts` → `/about`

### Nested routing

Nested files will also generate nested routes <br />

- `/lambda/about.ts` → `/about`
- `/lambda/blog/index.ts` → `/blog`
- `/lambda/about/contact.ts` → `/about/contact`

### Export method and corresponding route

The default exported method is generated as the root path, while the named method splices the function name on the path.

The following example uses `/lambda/about.ts`

- `export default () => {}` → `/about`
- `export function contact ()` → `/about/contact`

### wildwith routing

If you need to generate a wildcard route, such as `/api/*`, it is used to match/api,/api/about,/api/about/a/B/c. The file name is `[...file]`.

📢It is recommended that only `export default` is used to export functions in wildcard routes to avoid unnecessary route conflicts.

Example:

- `/lambda/[...index].ts` → `/api/*`
- `/lambda/[...user].ts` → `/api/user/*`
- `/lambda/about/[...contact].ts` → `/api/about/contact/*`

### Path parameters

If you need to generate dynamic path parameters, the file name can be named in the `[file]` format.

Examples:

- `/lambda/[name]/project.ts` → `/api/about/:name/project`
   - /about/midwayjs/project -> { name: 'midwayjs'}
- `/lambda/[type]/[page].ts` → `/api/about/:type/:page`
   - /blog/1 -> { type: 'blog', page: '1'}
   - /articles/3 -> { type: 'articles', page: '3'}

When you use the path parameters, you can only use `Api()` to develop backend interfaces and use `Params<T>` to mark types.

Take `/lambda/[name]/Project. ts` as an example:

```ts
// lambda/[name]/project.ts
import {
  Api
  Get
  Params
  useContext
} from '@midwayjs/hooks';

export default Api (
  Get()
  Params<{ name: string }>()
  async () => {
    const ctx = useContext();
    return {
      name: ctx.params.name
    };
  }
);
```

Integrated call:

```ts
import getProject from './api/[name]/project';
const response = await getProject ({
  params: { name: 'midwayjs'}
});
console.log(response); // { name: 'midwayjs'}
```

Manual call:

```ts
fetch('/api/about/midwayjs/project')
  .then((res) => res.json())
  .then((res) => console.log(res)); // { name: 'midwayjs'}
```