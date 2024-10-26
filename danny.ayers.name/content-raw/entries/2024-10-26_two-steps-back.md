# Two Steps Back

I've spent the past few hours at desk going around in circle with module loading in #:transmissions. Most of this was down to my over-reliance on Claude AI. The code required for core operations is just a bit too complex.

But one reason for this will be my use of repopack as-is for project knowledge. I need RAG material to be custom to the target. My own repopack.

Need docs.

A refactoring first : execute() -> process()

```sh
grep -r "process" | grep ".js"

grep -r ".js" | grep -v "^processors" | grep "process"

grep -r "execute" | grep -v "^node_modules" | grep ".md"
```

```sh
cd src
grep -r execute | grep ".js" | grep -v "^processors"
...
engine/Transmission.js:  async execute(message) {
engine/Transmission.js:      logger.error("No valid processor found to execute")
engine/Transmission.js:  async execute(message) {
engine/Transmission.js:    //  processor.execute(message)
engine/TransmissionRunner.js:                    await transmission.execute(message)
simples/nop/nop copy.js:message = await p10.execute(message)
simples/nop/nop copy.js:// message = await p20.execute(message)
simples/nop/nop.js:message = await nop.execute(message)
simples/nop/simple-runner.js:    const outputs = await processor.execute(message)
simples/nop/simple-runner.js:    var outputs = await nop.execute(message)
simples/nop/simple-runner.js:    outputs = await fork.execute(message)
simples/env-loader/env-loader.js:message = await p10.execute(message)
simples/env-loader/env-loader.js:message = await p20.execute(message)

grep -r ".execute" | grep ".js" | grep -v "^processors"
```

> Please give me a command that will scan the current directory tree and replace all occurrences in files of the string " execute(" with " process("

```sh
find . -type f -exec sed -i 's/ execute(/ process(/g' {} +
```
