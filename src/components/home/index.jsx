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
                      <p className="title1 captionDelay2 FromTop">Diseña</p>
                      <p className="title4 captionDelay7 FromBottom">The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.</p>
                    </div>
                  </li>
                  <li className="slide2">
                    <div className="flex_caption1">
                      <p className="title1 captionDelay6 FromLeft">Proyecta</p>
                      <p className="title4 captionDelay7 FromLeft">The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.</p>
                    </div>
                  </li>
                  <li className="slide3">
                    <div className="flex_caption1">
                      <p className="title1 captionDelay1 FromBottom">Construye</p>
                      <p className="title4 captionDelay5 FromBottom">The template is suitable for any company and the direction that appreciates style, purity and quality of the web site.</p>
                    </div>
                  </li>
                </ul>
                      <a name="P2" className="player" id="P2" data-property="{videoURL:'iUEek8PSt_I',containment:'.top_slider',autoPlay:true, mute:true, startAt:0, opacity:1}" />
              </div>
            </section>
        );
  }

};

