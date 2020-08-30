Heroku Checklist

1. Dynamic port binding

```js
// in express app
const PORT = process.env.port || 5000;
app.listen(PORT);
```

2. Specify node environment

```json
// in package.json
"engines": {
  "node": "12.16.2",
  "npm": "6.14.4"
},
```

3. Specify start script

```json
// in package.json
"scripts": {
  "start": "node index.js"
},
```

4. Create gitignore file

```
// create .gitignore at project root
node_modules
```
