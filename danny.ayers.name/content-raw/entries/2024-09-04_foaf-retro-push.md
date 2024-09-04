# FOAF Retro Push

---

A little precursor to the precursors below, a workaround for my setup not yet supporting HTML anchors in markdown. Below is :

```
<a id="yak-hairs" class="anchor" />
## Yak Hairs
```

<a id="yak-hairs" class="anchor" /> 
## Yak Hairs

- [ ] #Transmissions external app call
- [ ] publish FOAF Retro

### Transmissions external app call

In the `transmissions` dir (on my destop machine, `/home/danny/github-danny/transmissions`) :

```
./trans -d ../foaf-retro/src/applications postcraft ../foaf-retro/docs/postcraft
```

should run the application `postcraft` described in the dir `../foaf-retro/src/applications` with the target `../foaf-retro/docs/postcraft`

```
./trans postcraft ../postcraft/danny.ayers.name

./trans -d ../foaf-retro/src/applications postcraft.render ../foaf-retro/docs/postcraft

```
