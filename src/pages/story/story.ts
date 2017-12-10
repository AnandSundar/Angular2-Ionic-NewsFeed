import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-story',
  templateUrl: 'story.html',
})
export class StoryPage {
  story:Object;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.story = {
      title: this.navParams.data.title,
      content: this.navParams.data.content,
      pubDate: this.navParams.data.pubDate,
      image: this.navParams.data.enclosure.link,
      link: this.navParams.data.link,
      author: this.navParams.data.author
    }
  }

}
