# Remaining Time
Component for show remaining time

### Demo
![Remaining time demo](https://raw.githubusercontent.com/anayarojo/remaining-time/master/demo.gif)

### Usage

Include required resources:

```html
<!--Styles-->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css">
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">

<!--Scripts-->
<script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.js"></script>
<script src="script.js"></script>
```

Include `script.js` in the html file:

```html
<script src="script.js"></script>
```

Initialization:

```javascript

$(document).ready(function(){

    let cubeRemainingTime = new CubeRemainingTime();

    $('.shape').shape();

    cubeRemainingTime.init({
        date: new Date(2018, 11, 1),
        elements: {
            days: '#remaining-days',
            hours: '#remaining-hours',
            minutes: '#remaining-minutes',
            seconds: '#remaining-seconds',
        }
    });
});
```