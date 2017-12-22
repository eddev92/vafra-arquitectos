import React, { Component } from 'react';
import './index.css';

export default class FooterComponent extends Component {
    render() {
        return (

                <div class="container-fluid" id="footer">

                    <div class="row">
                        
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <h4><b>Dirección</b></h4>
                            <div class="recent_posts_small clearfix">
                                
                                <div class="post_item_content_small">
                                    <a class="title" href="blog.html" >Calle Brea y Pariñas 185    Of.402-Lima 33</a>
                                    <ul class="post_item_inf_small">
                                        <li>Santiago de Surco - Lima, Perú</li>
                                    </ul>
                                    <br />
                                    <ul class="social">
                                        <li><a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a></li>
                                        <li><a href="javascript:void(0);" ><i class="fa fa-facebook"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="col-lg-6 col-md-6 col-sm-6 foot_about_block">
                            <h4><b>Informes</b></h4>
                            <h5>Correos:</h5>
                            <p>palvarado.vafra@gmail.com</p>
                            <p>scandela.vafra@gmail.com</p>
                            
                        </div>
                        
                        <div class="respond_clear"></div>
                    </div>
                    <div class="row copyright">
                        <div class="col-lg-12 text-center">
                        
                         <p>Powered by<i class="fa fa-heart"></i><a href="http://designscrazed.org/" > E.Llanca</a></p>
                        </div>
                    
                    </div>
                </div>
        );
    }
};
