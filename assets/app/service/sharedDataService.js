'use strict';

app.service('sharedDataService',function(){
    this.state = {
        isHome : false
    }

    return this;
});