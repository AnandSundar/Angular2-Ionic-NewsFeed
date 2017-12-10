import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Feed } from '../../providers/feed/feed';
/**
 * Generated class for the StoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
})
export class StoriesPage {

  topic:string;
  stories:Array<any>;
  constructor(public feed:Feed, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.topic = 'cnn_topstories';
    this.getStories();
  }

  getStories(){
    this.feed.getStories(this.topic).subscribe(res => {
      console.log(res.items);
      this.stories = res.items;
    });
  }

}
