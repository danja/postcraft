# Two Steps Back

I've spent the past few hours at desk going around in circle with module loading in #:transmissions. Most of this was down to my over-reliance on Claude AI. The code required for core operations is just a bit too complex.

But one reason for this will be my use of repopack as-is for project knowledge. I need RAG material to be custom to the target. My own repopack.

Need docs.

A refactoring first : execute() -> process()

```sh
grep -r execute | grep ".js" | grep -v "^processors"

grep -r "process" | grep ".js"

grep -r ".js" | grep -v "^processors" | grep "process"

grep -r "execute" | grep -v "^node_modules" | grep ".md"

```


"execute(" with "process("
