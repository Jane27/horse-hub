HorseHub is a sample react project implemented by React.

## Libraries used:
- React router
- Mobx
- Styled-component
- Lodash
- Formik + yup
- Typescript

## How to run it locally

Prerequisite:

### 1. Install npm packages
```
yarn install
```

### 2. Start API server
```
docker pull firstaml/horse-test:latest
docker run -p 3016:3016 firstaml/horse-test:latest
```

## Start locally
```
yarn start
```

## Running tests
### `yarn test`

## Build for production

```
yarn build
```

## Questions:
1. The create horse api is PUT /horse. Would it be more standard to use post instead?