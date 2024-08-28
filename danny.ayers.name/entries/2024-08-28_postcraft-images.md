# Postcraft Images

This should be a little thing...

Markdown format is :

```
![alt text](https://hyperdata.it/images/raw-data_320x480.png)
```

The markdown lib I'm using should understand that :

![alt text](https://hyperdata.it/images/raw-data_320x480.png)

I'd better check relative URLs :

```
![alt text](../images/not-an-image.png)
```

![alt text](../images/not-an-image.png)

Looking good. That gets rendered as :

```
<img src="../images/not-an-image.png" alt="alt text">
```

So now, image locations. I must have set up a folder or something...yup. Of the form :

```
danny.ayers.name/media/images/2024-08/
```

I'd better check how I've got the paths when sent to the server...
