import React, { Component } from 'react';
import './index.css';
import ModalComponent from './../../tools/modal';
import {ID_MODAL_DISEÑO, ID_MODAL_PROYECTOS, ID_MODAL_CONSTRUCCION} from './../../tools/constants/constants';

export default class OurServicesComponent extends Component {
	state = {
		idModalSelected: ''
	};

	selectModal = (idModal) => {
		const {idModalSelected} = this.state;
		console.log(idModal)
		const id = idModal;
		this.setState({ idModalSelected: id})
	}

	renderContentServices(idModalSelected) {
		let content = '';

		switch (idModalSelected) {
			case ID_MODAL_DISEÑO: return content = 'Contenido informativo acerca del servicio de diseño';
			case ID_MODAL_PROYECTOS: return content = 'Contenido informativo acerca del servicio de proyecto';
			case ID_MODAL_CONSTRUCCION: return content = 'Contenido informativo acerca del servicio de construccion';
		}
		return content;
	}

  render() {
	  const {idModalSelected} = this.state;
        return (
            <div className="cleancode_block" id="projects">
				<div className="container" data-appear-top-offset="-200" data-animated="fadeInUp">
					<div id="myTabContent" className="tab-content">
						<div className="tab-pane fade in active clearfix" id="tab1">
							<p className="title"><b>DISEÑO</b></p>
							<span>Introduccion a diseño<br />
								<button className="btn peach-gradient btn-lg waves-effect waves-light" id="sellButton" data-toggle="modal" data-target={`#${ID_MODAL_DISEÑO}`} onClick={this.selectModal.bind(this, ID_MODAL_DISEÑO)}>Ver más</button>
							</span>
                            
						</div>
						<div className="tab-pane fade clearfix" id="tab2">
							<p className="title"><b>PROYECTOS</b></p>
							<span>Introduccion a proyectos<br />
								<button type="button" data-toggle="modal" data-target={`#${ID_MODAL_PROYECTOS}`} onClick={this.selectModal.bind(this, ID_MODAL_PROYECTOS)} className="btn peach-gradient btn-lg waves-effect waves-light" id="sellButton">Ver más</button>
							</span>
						</div>
						<div className="tab-pane fade clearfix" id="tab3">
							<p className="title"><b>CONSTRUCCIÓN</b></p>
							<span>Introduccion a construccion<br />
								<button type="button" data-toggle="modal" data-target={`#${ID_MODAL_CONSTRUCCION}`} onClick={this.selectModal.bind(this, ID_MODAL_CONSTRUCCION)} className="btn peach-gradient btn-lg waves-effect waves-light" id="sellButton">Ver más</button>
							</span>
							</div>
					</div>
					<ul id="myTab" className="nav nav-tabs row">
						<li className="active col-md-4"><a className="i1" href="#tab1" data-toggle="tab" ><i></i><span>Diseño</span></a></li>
						<li className="col-md-4"><a className="i2" href="#tab2" data-toggle="tab" ><i></i><span>Proyección</span></a></li>
						<li className="col-md-4"><a className="i3" href="#tab3" data-toggle="tab" ><i></i><span>Construcción</span></a></li>
						
					</ul>
				</div>
				<ModalComponent title="Servicios" id={ID_MODAL_DISEÑO} top={true}>
				<h3>{this.renderContentServices(ID_MODAL_DISEÑO)}</h3>
				</ModalComponent>
				<ModalComponent title="Servicios" id={ID_MODAL_PROYECTOS} top={true}>
				<h3>{this.renderContentServices(ID_MODAL_PROYECTOS)}</h3>
				</ModalComponent>
				<ModalComponent title="Servicios" id={ID_MODAL_CONSTRUCCION} top={true}>
				<h3>{this.renderContentServices(ID_MODAL_CONSTRUCCION)}</h3>
				</ModalComponent>
			</div>
        );
    }
}