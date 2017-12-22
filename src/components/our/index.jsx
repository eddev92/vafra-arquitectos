import React, { Component } from 'react';
import './index.css';

export default class OurVafraComponent extends Component {
  render() {
    return (
<section id="about">
			<div className="services_block padbot40" data-appear-top-offset="-200" data-animated="fadeInUp">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margbot30">
							<a className="services_item" href="javascript:void(0);" >
								<p>Historia</p>
								<span>Quality and very comfortable design, does not hurt the eyes and pleasant to use.</span>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margbot30">
							<a className="services_item" href="javascript:void(0);" >
								<p>Misión</p>
								<span>“Nuestra misión es ejecutar obras  civiles y proyectos integrales, buscando la máxima satisfacción del cliente y direccionar esfuerzos para el desarrollo y crecimiento de la empresa y sus colaboradores”.</span>
							</a>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 margbot30">
							<a className="services_item" href="javascript:void(0);" >
								<p>Visión</p>
								<span>“La visión  VAFRA ARQUITECTOS S.A.C  es llegar a ser la empresa de Arquitectura, Diseño y Construcción de gran prestigio en el país por la alta calidad de sus trabajos, el profesionalismo y seriedad de sus integrantes acompañado de su organización  eficiente, innovadora y moderna”.</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			
			
		</section>
    )
  }
}
