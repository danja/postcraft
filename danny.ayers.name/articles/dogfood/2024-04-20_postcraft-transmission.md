# Postcraft Transmission

launched with:

```
danny@danny-desktop:~/HKMS/treadmill$ ./run postcraft /home/danny/HKMS/postcraft/danny.ayers.name
```

- manifest.ttl is read by ContextReader

context gets :

```
{
"rootDir": "/home/danny/HKMS/postcraft/danny.ayers.name",
"dataset": <content of manifest.ttl as RDF-Ext dataset>
}
```

### Treadmill Conventions

context is a JS dictionary

it may contain an RDF dataset as {dataset:dataset}

services that send a series of messages can end with :

```
  this.emit('message', this.doneMessage, context)
```
