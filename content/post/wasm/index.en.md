---
author: Xianfei
title: Get to Know WebAssembly!
date: 2022-06-01
slug: wasm
image: wasm_en.png
color: "#5b66e5"
categories:
    - Web
    - C++
---


## What is WebAssembly?

{{< quote source="webassembly.org" url="https://webassembly.org/" >}}
WebAssembly (abbreviated Wasm) is a binary instruction format for a stack-based virtual machine. Wasm is designed as a portable compilation target for programming languages, enabling deployment on the web for client and server applications.
{{< /quote >}}

WebAssembly is a novel coding approach that operates in modern web browsers - it's a low-level, assembly-like language with a compact binary format that runs at near-native performance. It provides a compilation target for languages like C/C++, enabling them to run on the Web. It's also designed to coexist with JavaScript, allowing both to work together.

For the web platform, WebAssembly is of significant importance - it offers a way for code written in various languages to run at near-native speeds on the Web. In this scenario, client-side software that previously couldn't run in this way can now operate on the Web.

WebAssembly is designed to work in tandem with JavaScript - using WebAssembly's JavaScript API, you can load WebAssembly modules into a JavaScript application and share functionality between them. This allows you to leverage the performance and power of WebAssembly along with the expressiveness and flexibility of JavaScript in the same application, even if you may not know how to write WebAssembly code.

The above three sections are from MDN: https://developer.mozilla.org/zh-CN/docs/WebAssembly

## Installing the Compiler

First, we need to install a WebAssembly compiler, **emscripten**. For macOS, you can use brew for installation.

```bash
brew install emscripten
```

### Testing if emscripten is Successfully Installed

Here, we can run `emcc` and `emcc --version` to test if it's installed successfully.

<img class="xf-img-full" src="p1.png">

## Running C Code in the Web

C++, due to its support for function overloading, object-oriented programming, and namespaces, has less intuitive symbol names (mangled symbols) compared to C. This article will start with demonstrating using C.

### Writing C Code

Below, we write a very simple C language example that will return the sum of two numbers. In your working directory, create a file named test.c.

```c
#include <stdio.h>
#include <emscripten/emscripten.h>

// The code in main() will execute once the WASM module is loaded
int main(int argc, char ** argv) {
    printf("WebAssembly module loaded\n");
}

// Returns the sum of two numbers
int EMSCRIPTEN_KEEPALIVE get_sum(int a,int b) {
    return a + b;
}
```

### Compiling C to WebAssembly

Now that we have the C code, the next step is to compile it into wasm. Not only that, but we also need to generate the corresponding JavaScript glue code to get it running.

```bash
emcc test.c -s WASM=1 -O2 -o index.js
```

The meanings of each parameter are as follows:

-   `emcc` — represents the Emscripten compiler;
-   `test.c` — the file containing C code;
-   `-s WASM=1` — specifies the use of WebAssembly;
-   `-O2` — code optimization level;
-   `-o index.js` — specifies the generation of a JS file containing all the glue code needed for the wasm module;

After compilation, index.js and index.wasm files will be generated.

### Writing HTML Code

There's a powerful API available in browsers for handling WebAssembly. We won't delve deep into it here as it goes beyond the scope of a beginner's tutorial. We only need the Module interface and its ccall method. This method allows us to call a function from the C code by its name, and then use it just like a regular JS function.

```javascript
var result = Module.ccall(
    "funcName", // function name
    "number",   // return type
    ["number"], // parameter types
    [42]        // arguments
);
```

After calling this method, `result` will have all the functionality of the corresponding C function. All parameters except the function name are optional.

We can also use a shorthand version (using the symbol name):

```javascript
var result = _funcName(args...);
```

Next, we need to write an HTML file, named here as index.html, containing a button and a div block to display the result.

Then

 we add a script tag to write the code for calling the wasm module in JavaScript. Thanks to the presence of the glue code (index.js), this task becomes very simple as it has already handled all the wiring for us.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>WebAssembly Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <button id="run">Execute!</button>
    <div id="result"></div>
    <script src="index.js"></script>

    <script>
      // When the button is clicked, its value will change
      var runButton = document.querySelector("#run");

      runButton.addEventListener("click", function () {
        // Call the get_sum function in the C code
        var result = _get_sum(2, 4);
        document.querySelector("#result").innerText = result;
      });
    </script>
  </body>
</html>
```

Then access the webpage, here using the Live Server plugin of VSCode for access (other HTTP file servers also work), **do not run by directly opening the html file** (due to CORS local file restrictions).

<img class="xf-img-full" src="p3.webp">

## What About C++?

First, convert the above code to C++ and save it as a test.cpp file.

```c++
#include <iostream>
#include <emscripten/emscripten.h>
 
// The code in main() will execute once the WASM module is loaded
int main(int argc, char ** argv) {
    std::cout << "WebAssembly module loaded" << std::endl;
}
 
// Returns the sum of two numbers
int EMSCRIPTEN_KEEPALIVE get_sum(int a,int b) {
    return a + b;
}
```

Then compile in the same way.
```bash
emcc test.cpp -s WASM=1 -O2 -o index.js
```

C++ has complex [Symbol Mangling](http://web.mit.edu/tibbetts/Public/inside-c/www/mangling.html) rules. Let's start by analyzing a standard C++ file, compile it with g++ and then analyze the symbols using the nm command, as shown in the image below.

<img class="xf-img-full" src="p4.png">

We see that the symbol name for our written function is `__Z7get_sumii`, so we can call this function using this symbol name.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>WebAssembly Example</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <button id="run">Execute!</button>
    <div id="result"></div>
    <script src="index.js"></script>

    <script>
      // When the button is clicked, its value will change
      var runButton = document.querySelector("#run");

      runButton.addEventListener("click", function () {
        // Call the get_sum function in the C++ code
        var result = __Z7get_sumii(2, 4);
        document.querySelector("#result").innerText = result;
      });
    </script>
  </body>
</html>
```

We can also confirm this by looking at the WebAssembly disassembly code through DevTools.

<img class="xf-img-full" src="p5.webp">