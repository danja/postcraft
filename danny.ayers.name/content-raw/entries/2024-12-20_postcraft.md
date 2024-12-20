# Postcraft

#:postcraft is an application of #:transmissions which I put while figuring out #:transmissions. It's a static site builder, you're looking at its product. Right now it's **a crufty, fragile, seriously over-engineered and breathtakingly inefficient static site builder**. But that's not a problem. Things *should* be coupled loosely enough that I can incrementally improve all this with minimal breakage along the way. *Should* be.

The fact that I've messed up the CSS somewhere but have no idea where suggests there *is* a problem.

I'm only using HTML/CSS/Vanilla JS for presentation, but it's all a bit of a lump right now. I need to tease out the bits that are actually in use, relocate and organise them in a way that I can work on them in isolation.

**Ew.** The current filesystem setup really is a shambles.

Ok, the root of this site when published locally is :
```sh
/home/danny/github-danny/postcraft/danny.ayers.name/public/home
...
ls
css  entries  fonts  index.html  js  media  static
```

In `index.html` is :
```html
<link rel="stylesheet" href="css/fonts.css" type="text/css" />
<link rel="stylesheet" href="css/grid-columns.css" type="text/css" />
<link rel="stylesheet" href="css/style.css" type="text/css" />
```

Hmmm. I put the `danny.ayers.name` material under `.../postcraft/` because it's been acting as test data. This might be a good time to move it somewhere more production-like. Ok, new repo : https://github.com/danja/danny.ayers.name

As a static site builder #:postcraft currently :
* copies a bunch of stuff from A -> B
* walks dirs transforming markdown -> html
* templates the individual entry pages
* templates `index.html`

I'd better remind myself of the #:postcraft #:transmission and the manifest I'm using for `danny.ayers.name`.
