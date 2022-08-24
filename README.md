# sanskrit-lite

**Prerequsites**
1. Install [Node]
2. Install [Git]
3. Install [Visual Studio Code]
4. Install [TypeScript] `npm install --location=global typescript`
5. Install [http-server] `npm install --location=global http-server`

Using **TypeScript** and **Modules** in day-to-day applications (**Super Easy**)

> **This app will be used to write romanized sanskrit**  

## Notes -- Creating a New TypeScript Project
This is a **simple** example project that uses **TypeScript** for  
the source. Using TypeScript is as simple as 1 installing it globally,  
and 2 creating a simple `tsconfig.json` as follows:

1. Install TypeScript `> npm install -g typescript`
2. Create `.../your-project-name/tsconfig.json` 

**.../your-project-name/tsconfig.json**
```json
{
    "compilerOptions": {
        "target": "ES6",  /* Support for Class.name, Getters, Setters */
        "rootDir": "src", /* Specify the root directory of input files. Use to control the output directory structure with --outDir. */
        "outDir": "app"   /* Redirect output structure to the directory. */
    }
}
```

## Tips
1. Make sure your source directory is named the same thing as the `rootDir` in `tsconfig.json`
2. The assets folder is used for public stuff like images and css  
3. All the TypeScript source files need to be in the **src** directory.

## Get the project 
1. `C:\> git clone https://github.com/markdavich/sanskrit.mvc.git`
2. Install **TypeScript** with `C:\> npm install --location=global typescript`
3. Install **http-server** with `C:\> npm install --location=global http-server` ([http-server])
4. `C:\> cd sanskrit.mvc`
5. `C:\sanskrit.mvc> code -r .`
6. Compile the project with `C:\sanskrit.mvc> tsc` (This puts all the distributable source into the **app** folder)
7. Serve project with `C:\sanskrit.mvc> http-server`
8. `Ctrl + Click http://127.0.0.1:8080` on the command line to use the app 

# HUGE NOTE
> Every **import** in the **src** folder  
> must have a **.js** appended to the path.  
> **When `tsc` runs it will compile the imports with  
> the `.js` suffix** and the application will work.  
> EXAMPLE  
>   
> ```typescript
> import { Study } from "./Study.js";  
> ```

### `sanskrit-lite\app` folder
- This folder is created by running `C:\...\sanskrit-lite\> tsc` on the command line
- This folder is the build directory for `tsc`
- This is the folder that would be deployed along with any other assets

use `http-server` to run the project

See the TypeScript [handbook] -- **Get Started** > **TypeScript Tooling in 5 minutes**

[Git]: https://git-scm.com/downloads
[TypeScript]: https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html
[Node]: https://nodejs.org/en/download/
[Visual Studio Code]: https://code.visualstudio.com/download
[handbook]: https://www.typescriptlang.org/docs/handbook/intro.html
[http-server]: https://www.npmjs.com/package/http-server
