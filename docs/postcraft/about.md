# About

```sh
./trans md-to-sparqlstore ~/hyperdata/postcraft/docs/postcraft
./trans postcraft-statics ~/hyperdata/postcraft/docs/postcraft
./trans sparqlstore-to-html ~/hyperdata/postcraft/docs/postcraft
./trans sparqlstore-to-site-indexes ~/hyperdata/postcraft/docs/postcraft
```

## Default Postcraft Structure

- about.md
- manifest.ttl
- content
  - media
  - raw
  - static
- knowledge
  - prompts
  - references
- layout
  - base
  - logos
- public
- system
  - sparql-templates

---

```sh
cd ~/sites/strandz.it/postcraft
tree -L 2 --filesfirst
```
