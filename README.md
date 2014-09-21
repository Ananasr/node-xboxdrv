#node-xboxdrv

This node module creates binding to xboxdrv. The main purpose of this is 
to create an alternate Xbox controller module which does not rely on node-hid.

##Prerequisites
1. Linux
2. xboxdrv

##Usage
######Note that you should run your program with sudo as xboxdrv may not be able to open the controller otherwise.
```javascript
var xbox = require('node-xboxdrv');
var controller = new xbox(pid,vid);
```
Where pid and vid are the product id and the vendor id for your controller. 
This can be obtained in the output of lsusb. pid and vid are strings.

    Bus 002 Device 002: ID pid:vid Xbox Controller
    
Then you can attach event listeners to listen for specific controller actions 
and trigger a callback.

```javascript
controller.on('a',function(){});
controller.on('rightX',function(data){});
```

All the relevant input names can be found in config.json.
