import React, { Component } from 'react';
import './index.css';
import ModalComponent from './../../tools/modal';
import {ID_MODAL_VENTA} from './../../tools/constants/constants';

export default class SellsComponent extends Component {
  render() {
        return (
            <div className="purpose_block" id="sells">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-7" data-appear-top-offset="-200" data-animated="fadeInLeft">
							<h2><b>Venta</b> de Inmobiliarios</h2>
							<p>PARRAFO INTRODUCTORIO A LA SECCION VENTAS.</p>
							<a className="btn btn-active" data-toggle="modal" data-target={`#${ID_MODAL_VENTA}`}><span data-hover="inmobiliarios">Ver más</span></a>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-5 ipad_img_in" data-appear-top-offset="-200" data-animated="fadeInRight">
							<img className="ipad_img1" src="images/venta1.jpg" alt="" />
						</div>
					</div>
				</div>
				<ModalComponent title="Venta de Inmobiliarios" id={ID_MODAL_VENTA} top={true}>
				<ul class="nav nav-tabs nav-justified">
					<li class="nav-item">
						<a class="nav-link active" data-toggle="tab" href="#panel1" role="tab">Casa de Playa - Totoritas</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#panel2" role="tab">Residencial Tulipanes - Lima, Perú</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" data-toggle="tab" href="#panel3" role="tab">Multifamiliar Vafra - Lima, Perú</a>
					</li>
				</ul>
				<div class="tab-content card">
					<div class="tab-pane fade" id="panel1" role="tabPanel">
						<br/>
						<div className="totoritas">
							<div className="item1" style={{marginTop: 30}}>
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/playa-totoritas/portada.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/playa-totoritas/item2.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/playa-totoritas/item3.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/playa-totoritas/item4.jpg" alt=""/>
							</div>
							<button className="btn btn-default" style={{background: '#121035', margin: 0}}><a  target="_blank" href="http://www.adondevivir.com/propiedades/casa-de-playa-en-lindo-condominio-totoritas-video-50447619.html">Ver enlace</a></button>
						</div>
					</div>
					<div class="tab-pane fade" id="panel2" role="tabPanel">
						<br/>
						<div className="totoritas">
						<div className="item1" style={{marginTop: 30}}>
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/residencial-tulipanes/fotos/portada.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/residencial-tulipanes/fotos/item2.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/residencial-tulipanes/fotos/item3.jpg" alt=""/>
							</div>
							<div className="item1">
								<div class="view gradient-card-header peach-gradient">
									<h2 class="h2-responsive mb-2">Title of the news</h2>
								</div>
									<img src="images/residencial-tulipanes/fotos/item4.jpg" alt=""/>
							</div>
						</div>
					</div>
					<div class="tab-pane fade" id="panel3" role="tabPanel">
						<br/>
						<div className="residencial-vafra">
							<div className="item1" style={{marginTop: 30}}>
									<div class="view gradient-card-header peach-gradient">
										<h2 class="h2-responsive mb-2">Title of the news</h2>
									</div>
										<img src="images/residencial-vafra/portada.jpg" alt=""/>
									</div>
								</div>
							</div>
						</div>
					</ModalComponent>
			</div>
        );
    }
}