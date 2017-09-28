'use strict';

app.service('sharedDateService',function(){
    this.state = {
        isHome : false
    }

    return this;
});