# Anchor Typescript Model Transpiler

## Introdcution 
A transpiler that converts your anchor programs idl to typescript models/interfaces

## Why was it made?
Well usually one writes structs(interfaces) in smart contracts, but while integrating they have to write the same structs again to write better, fast code. I was always pretty annoyed by this, well not anymore...


## Watch the demo
[![Alt text](https://img.youtube.com/vi/AbLkFCUsow8/0.jpg)](https://www.youtube.com/watch?v=AbLkFCUsow8)


## Installation
- Run ``yarn install`` to download all the dependencies.
``` 
yarn install
```

- Add your anchor IDL json file by replacing the current [idl.json](idl.json).

- Run `yarn setup` to generate the file. This step is only required first time.
``` 
yarn setup
```


- Run `yarn start` and get the models right away :rocket: 
``` 
yarn start
```

## Future
I might make a website on this to help devs use this easily and faster, time will tell.
