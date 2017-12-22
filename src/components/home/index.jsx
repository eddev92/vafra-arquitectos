import React, { Component } from 'react';
import './index.css';

export default class HomeComponent extends Component {
  render() {
    return (
            <section id="home" className="padbot0">
              <div className="flexslider top_slider">
                <ul className="slides">
                  <li className="slide1">
                    <div className="flex_caption1">
                      <p className="title1 captionDelay2 FromTop">DISEÑA</p>
                      <p className="title4 captionDelay7 FromBottom">ESLOGAM DISEÑA</p>
                    </div>
                  </li>
                  <li className="slide2">
                    <div className="flex_caption1">
                      <p className="title1 captionDelay6 FromLeft">PROYECTA</p>
                      <p className="title4 captionDelay7 FromLeft">ESLOGAN PROYECTA</p>
                    </div>
                  </li>
                  <li className="slide3">
                    <div className="flex_caption1">
                      <p className="title1 captionDelay1 FromBottom">CONSTRUYE</p>
                      <p className="title4 captionDelay5 FromBottom">ESLOGAN CONSTRUYE</p>
                    </div>
                  </li>
                </ul>
                      <a name="P2" className="player" id="P2" data-property="{videoURL:'iUEek8PSt_I',containment:'.top_slider',autoPlay:true, mute:true, startAt:0.1, opacity:1}" />
              </div>
            </section>
        );
  }

};

