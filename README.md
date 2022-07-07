## Video gallery

#### (Ginkgopm)

### Instructions

Install dependencies:

```bash
npm i
```

Create src/data.js file with Youtube videos src and passcode:

```bash
export const videosSrc = [
    'bWJor9riaBA',
    'dBUd46cZzSA',
    'LZ76g07JElo',
    't_XwTYsvWBo',
    'qsU7HayzD4I',
]
export const PASSCODE = 'secretcode'
```

Start app:

```bash
npm start
```

Build app:

```bash
npm run build
```

Call with html iframe:

```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Ginkgo | Atención integral de la persona mayor</title>
    <style type="text/css">
      body {
        padding: 0;
        margin: 0;
        overflow: hidden;
      }
      .iframe1 {
        position: absolute;
        left: 0px;
        width: 100%;
        top: 0px;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <iframe
      class="iframe1"
      src="App url"
      height="100%"
      width="100%"
      frameborder="0"
    ></iframe>
  </body>
</html>
```

Developed by Creativo Multimedia