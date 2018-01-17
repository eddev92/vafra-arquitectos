import React, { Component } from 'react';
import './index.css';
import ModalComponent from './../../tools/modal';
import {ID_MODAL_CONTACTOS} from './../../tools/constants/constants';


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
                                        <li><a href="https://www.facebook.com/Vafraarquitectos/" target="_blank"><img src="images/fb_logo.png" alt="" /></a></li>
                                        {/* <li><a href="javascript:void(0);" ><i className="fa fa-facebook"></i></a></li> */}
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div class="col-lg-6 col-md-6 col-sm-6 foot_about_block mails">
                            <h4><b>Informes</b></h4>
                            <h5>Correos:</h5>
                            <p>informes@vafraarquitectos.pe</p>
                            <p>palvarado.vafra@gmail.com</p>
                            <p>scandela.vafra@gmail.com</p>
                            <a className="btn btn-active" id="boton-contactar-footer" data-toggle="modal" data-target={`#${ID_MODAL_CONTACTOS}`}><span data-hover="inmobiliarios">Contactarnos</span></a>
                        </div>
                        
                        <div class="respond_clear"></div>
                    </div>
                    <div class="row copyright">
                        <div class="col-lg-12 text-center">
                        
                         <p>Desarrollado por <i class="fa fa-heart"></i><a>[ E.Llanca ]</a></p>
                        </div>
                    
                    </div>
                    <ModalComponent title="Venta de Inmobiliarios" id={ID_MODAL_CONTACTOS} top={true}>
                        <form id="contactos">
                                <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input type="text" id="defaultForm-nombres" className="form-control"/>
                                        <label htmlFor="defaultForm-nombres">Nombres y apellidos</label>
                                </div>
                                
                                <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input type="text" id="defaultForm-telefono" className="form-control"/>
                                        <label htmlFor="defaultForm-telefono">Teléfonos</label>
                                </div>
                                
                                <div className="md-form">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                        <input type="text" id="defaultForm-correo" className="form-control"/>
                                        <label htmlFor="defaultForm-correo">Correo electrónico</label>
                                </div>
                                <div className="md-form textarea">
                                        <i className="fa fa-envelope prefix grey-text"></i>
                                                    <textarea type="text" id="form8" class="md-textarea" style={{height: 60}}></textarea>
                                        <label htmlFor="defaultForm-mensaje">Mensaje</label>
                                </div>
                                <div className="text-center">
                                        <button className="btn btn-default" style={{background: '#121035'}}>Contactar</button>
                                </div>
                        </form>
					</ModalComponent>
                </div>
        );
    }
};
