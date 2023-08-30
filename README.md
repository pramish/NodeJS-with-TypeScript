# NodeJS-with-TypeScript

## Please clone the project using
```bash
  git clone git@github.com:pramish/NodeJS-with-TypeScript.git
```

Required node version is

```bash
nodejs 18.14.*
```

You can either use nvm or [asdf](https://asdf-vm.com/) to manager node version.
You can either use yarn or npm to install the dependencies.

This project is built using yarn. If you're using npm then please run the following command from the root
of this project.
    
```bash
rm yarn.lock;npm install
```

The above command will ensure that the dependencies are installed using npm.

Once you cloned the repo, please run the following command to install the dependencies

### If you're using yarn

```bash
yarn install
```

### If you're using npm
```bash
npm install
```

## To run the server, lease run the following command from the root

### If you're using yarn 

```bash
yarn start:dev
```

### If you're using npm

```bash

{
  "compilerOptions": {
    "target": "ESNext",
    "module": "CommonJS",
    "baseUrl": "./src",
    "outDir": "./dist",
    "sourceMap": true,
    "moduleResolution": "node",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitAny": true,
    "alwaysStrict": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
  },
  "lib": [
    "ESNext",
    "esnext.asynciterable"
  ],
  "typeRoots": [
    "src/types/*.ts",
    "./node_modules/@types"
  ],
  "include": [
    "src/**/*.ts",
    "test/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

```bash
npm run start:dev
```

```bash
`Update the package.json with the following start:dev script`
"nodemon --exec ts-node ./src/server.ts --mode development"

```

# Happy coding!
