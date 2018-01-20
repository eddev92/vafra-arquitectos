import React, { Component } from 'react';
import './index.css';
import ModalComponent from './../../tools/modal';
import {
	ID_MODAL_VENTA,
	ID_DEPA_VAFRA_101,
	ID_DEPA_VAFRA_102,
	ID_DEPA_VAFRA_201,
	ID_DEPA_VAFRA_202,
	ID_DEPA_VAFRA_401,
	ID_DEPA_VAFRA_402
} from './../../tools/constants/constants';

export default class SellsComponent extends Component {
	state= {
		departamentos: [],
		depaSelected: false,
		depaSelectedView: {}
	}
	componentDidMount() {
		this.loadDepartamentos();
	}
	loadDepartamentos = () => {
		const depas =[
			{	
				depaId: 'flat_101',
				img: 'images/residencial-vafra/101-flat.jpg',
				areaConstruida: 101.16,
				areaOcupada: 116.77,
				vendido: false,
				tipo: 'FLAT',
				conAzotea: false
			},
			{
				depaId: 'flat_102',
				img: 'images/residencial-vafra/102.jpg',
				areaConstruida: 83.52,
				areaOcupada: 114.08,
				vendido: false,
				tipo: 'FLAT',
				conAzotea: false
			},
			{
				depaId: 'flat_201',
				img: 'images/residencial-vafra/201-301.jpg',
				areaConstruida: 120.00,
				areaOcupada: 120.00,
				vendido: false,
				tipo: 'FLAT',
				conAzotea: false
			},
			{
				depaId: 'duplex_202',
				img: 'images/residencial-vafra/202-duplex.jpg',
				areaConstruida: 130.68,
				areaOcupada: 130.68,
				vendido: false,
				tipo: 'DUPLEX',
				conAzotea: false
			},
			{
				depaId: 'duplex_401',
				img: 'images/residencial-vafra/401.jpg',
				areaConstruida: 146.76,
				areaOcupada: 209.27,
				vendido: true,
				tipo: 'DUPLEX',
				conAzotea: false
			},
			{
				depaId: 'duplex_402',
				img: 'images/residencial-vafra/402.jpg',
				areaConstruida: 100.56,
				areaOcupada: 161.46,
				vendido: false,
				tipo: 'DUPLEX',
				conAzotea: true
			}
		]
		this.setState({departamentos: depas})
	}

	renderButtons() {

		const buttons = [
			{
				idButton: '1',
				idDepa: ID_DEPA_VAFRA_101,
				styleButton: 'btn btn-success waves-effect waves-light',
				numberDepa: '101'
			},
			{
				idButton: '2',
				idDepa: ID_DEPA_VAFRA_102,
				styleButton: 'btn btn-info waves-effect waves-light',
				numberDepa: '102'
			},
			{
				idButton: '3',
				idDepa: ID_DEPA_VAFRA_201,
				styleButton: '"btn btn-warning waves-effect waves-light',
				numberDepa: '201-301'
			},
			{
				idButton: '4',
				idDepa: ID_DEPA_VAFRA_202,
				styleButton: 'btn btn-secondary waves-effect waves-light',
				numberDepa: '202'
			},
			{
				idButton: '5',
				idDepa: ID_DEPA_VAFRA_401,
				styleButton: 'btn btn-danger waves-effect waves-light',
				numberDepa: '401'
			},
			{
				idButton: '6',
				idDepa: ID_DEPA_VAFRA_402,
				styleButton: 'btn btn-primary waves-effect waves-light',
				numberDepa: '402 + AZOTEA'
			}
		];
		console.log(buttons)
		let btns = [];
		btns = buttons.map((button) => {
			return <button onClick={this.depaSelect.bind(this, button)} className={button.styleButton}><a>{button.numberDepa}</a></button>
		});
		return btns;
	}
	depaSelect = (depaButton) => {
		const {departamentos, depaSelected, depaSelectedView} = this.state;
		console.log(depaButton)
		console.log(departamentos)
		const depa = departamentos.find((depa) => depa.depaId === depaButton.idDepa);
		console.log(depa)
		this.setState({depaSelected: true, depaSelectedView: depa})
	}
	renderDepartamentoSelected() {
		const {departamentos, depaSelected, depaSelectedView} = this.state;
		console.log(depaSelected)
		if (depaSelected) {
			return <img src={depaSelectedView.img} alt=""/>
		} else {
			return <div className="logoVenta">
			<img src="images/logo.png" />
			<div className="message">
			<p>UN LUGAR PENSADO PARA LA FAMILIA...</p></div>
		</div>
		}
	
	}
	homeDepa = () => {
		const {depaSelected} = this.state;
		this.setState({ depaSelected: !depaSelected});
	}
	infoDepa = (depa) => (
		<section className="section infoDepa">
			<div className="card pricing-card">
                <div className="price header blue">
                    <div className="version">
                        <h5>MULTIFAMILIAR VAFRA</h5>
                    </div>
                </div>
                <div className="card-body striped">
                    <ul>
                        <li>
                            <p className="mt-1"><i className="fa fa-check"></i>Área construida: {depa.areaConstruida} m2</p>
                        </li>
                        <li>
                            <p><i className="fa fa-check"></i>Área ocupada: {depa.areaOcupada} m2</p>
                        </li>
                        <li>
                            <p className={depa.vendido ? 'isSelled' : ''}><i className="fa fa-times"></i>Disponible: {depa.vendido ? 'VENDIDO' : 'NO VENDIDO'}</p>
                        </li>
                        <li>
                            <p><i className="fa fa-times"></i>Tipo: {depa.tipo}</p>
                        </li>
                        <li>
                            <p><i className="fa fa-times"></i>Con azotea: {depa.conAzotea ? 'SI' : 'NO'}</p>
                        </li>
                        <li>
                            <p style={{textAlign: 'left', padding: '0 30px'}} className="isSelled">- Piso porcelanato tipo madera en sal, comedor y dormitorios.<br/>
							- Piso porcelanato en baños y cocinas<br/>- Tableros de granito en cocinas y baños.<br />- Instalaciones de gas en cocina y lavanderías.<br/>
							- Instalaciones sanitarias de tuberías de polipropileno.<br/>- Ascensor de ultima generación SCHINDLER.<br/>- Jardinería sostenible (jerdines verticales).</p>
                        </li>
                    </ul>
					<button onClick={this.homeDepa} className="btn btn-primary waves-effect waves-light"><a>Volver</a></button>
                </div>

            </div>
		</section>
	)
	
  render() {
	  const {depaSelected, depaSelectedView} = this.state;

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
				<ModalComponent title="Residencial multifamiliar Vafra" id={ID_MODAL_VENTA} top={true} isLarge={true}>
				<div className="residencial-vafra">
							<div className="item1" style={{marginTop: 30}}>
									<div className="row fondo">
										<div className={(depaSelected) ? 'col-md-6 fondo-item isInfo' : 'col-md-6 fondo-item'}>
											{(depaSelected) ? this.infoDepa(depaSelectedView) : <img src="images/residencial-vafra/render1.png" alt=""/>}
										</div>
										<div className="col-md-6 fondo-item">
											<img src="images/residencial-vafra/render2.png" alt=""/>
												<div className="depa">
													{this.renderDepartamentoSelected()}
												</div>
										<div className="depas">
											{this.renderButtons()}
										</div>
										</div>
									</div>
								</div>
							</div>
				{/* <ul class="nav nav-tabs nav-justified">
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
						</div> */}
					</ModalComponent>
			</div>
        );
    }
}