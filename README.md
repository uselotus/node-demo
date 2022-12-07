# node-demo

## Getting Started
run command node index.js inside the project root directory 

## Testing Different Methods
To Test the demo methods you just need to call the method inside the app.get() method as follows 

```
app.get("/", (req, res) => {
    trackEvent()
  res.sendFile(__dirname + "/index.html");
});
```
All the mehods calling the TS sdk methods are defined with required parameter , we just have to replace the calling of the fuction inside app.get 
For example to test 

- Testing out the change subscription method

```
app.get("/", (req, res) => {
    changeSubscription()
  res.sendFile(__dirname + "/index.html");
});
```


- Testing out the getCustomerAccess method

```
app.get("/", (req, res) => {
    getCustomerAccess()
  res.sendFile(__dirname + "/index.html");
});
```

and so on.....
