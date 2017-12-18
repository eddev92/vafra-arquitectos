import React, { Component } from 'react';

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

			<div className="cleancode_block">
				<div className="container" data-appear-top-offset="-200" data-animated="fadeInUp">
					<div id="myTabContent" className="tab-content">
						<div className="tab-pane fade in active clearfix" id="tab1">
							<p className="title"><b>Clean</b> Code</p>
							<span>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</span>
						</div>
						<div className="tab-pane fade clearfix" id="tab2">
							<p className="title"><b>Technical</b> Support</p>
							<span>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</span>
						</div>
						<div className="tab-pane fade clearfix" id="tab3">
							<p className="title"><b>Diseño</b></p>
							<span>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</span>
						</div>
					</div>
					<ul id="myTab" className="nav nav-tabs row">
						<li className="active col-md-4"><a className="i1" href="#tab1" data-toggle="tab" ><i></i><span>Diseño</span></a></li>
						<li className="col-md-4"><a className="i2" href="#tab2" data-toggle="tab" ><i></i><span>Proyección</span></a></li>
						<li className="col-md-4"><a className="i3" href="#tab3" data-toggle="tab" ><i></i><span>Construcción</span></a></li>
						
					</ul>
				</div>
			</div>
			<div className="purpose_block">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-7" data-appear-top-offset="-200" data-animated="fadeInLeft">
							<h2><b>Multi-purpose</b> WordPress Theme</h2>
							<p>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</p>
							<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
							<a className="btn btn-active" href="javascript:void(0);" ><span data-hover="Yes I want it">Byu This theme</span></a>
							<a className="btn" href="javascript:void(0);" >View more templates</a>
						</div>
						<div className="col-lg-5 col-md-5 col-sm-5 ipad_img_in" data-appear-top-offset="-200" data-animated="fadeInRight">
							<img className="ipad_img1" src="images/img1.png" alt="" />
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}
