try {
    throw new ReferenceError('Error message', 'someFile.js', 10)
  } catch (e) {
    console.log(e instanceof ReferenceError)  // true
    console.log(e.message)                    // "Hello"
    console.log(e.name)                       // "ReferenceError"
    console.log(e.fileName)                   // "someFile.js"
    console.log(e.lineNumber)                 // 10
    console.log(e.columnNumber)               // 0
    console.log(e.stack)                      // "@Scratchpad/2:2:9\n"
    console.log(e.errors)
  }

  module.exports={
      ReferenceError
  }
  