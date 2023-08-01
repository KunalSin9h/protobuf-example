![banner](https://tiddi.kunalsin9h.com/yIbhCi5)

Protocol Buffer

To compile the proto file for **JavaScript** run the following command:

```bash
protoc --js_out=import_style=es6,binary:. proto/*.proto
```

> `import_styles` can also be `commonjs`, use --js_out=import_style=commonjs,binary:. proto/*.proto

### Dependencies

1. google-protobuf