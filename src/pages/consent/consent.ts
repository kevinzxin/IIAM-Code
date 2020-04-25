import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';



@Component({
  selector: 'consent-page',
  templateUrl: 'consent.html'
})
export class ConsentPage {

  constructor(public navCtrl: NavController) {

  }

  goToHome(){
    
  }

  slides = [
    {
      title: "Welcome to IIAM!",
      description: "<b>IIAM (IIAM)</b> empowers patients with tracheostomies.",
      image: "assets/img/IIAM_logo.png",
    },
    {
      title: "What is IIAM?",
      description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "What is Ionic Cloud?",
      description: "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];
}
