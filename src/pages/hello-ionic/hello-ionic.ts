  import { Component } from '@angular/core';
  import { Screenshot } from '@ionic-native/screenshot';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})


export class HelloIonicPage {
constructor(public screenshot: Screenshot) { 

}

takeScreenShot(){
  console.log(this.screenshot);
  console.log(this.screenshot.save);
  this.screenshot.save('jpg', 80, 'myscreenshot.jpg').then(this.onSuccess, this.onError);
}
onSuccess(success){
    console.log(success);
}
onError(err){
    console.log(err);  
}
}
