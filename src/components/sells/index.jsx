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
							<img className="ipad_img1" src="images/img1.png" alt="" />
						</div>
					</div>
				</div>
				<ModalComponent title="Venta de Inmobiliarios" id={ID_MODAL_VENTA} top={true}>
			<h3>Seccion de venta de inmobiliarios</h3>
					</ModalComponent>
			</div>
        );
    }
}