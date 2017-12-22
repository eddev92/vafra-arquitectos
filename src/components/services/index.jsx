import React, { Component } from 'react';
import './index.css';

export default class OurServicesComponent extends Component {
  render() {
        return (
            <div className="cleancode_block" id="projects">
				<div className="container" data-appear-top-offset="-200" data-animated="fadeInUp">
					<div id="myTabContent" className="tab-content">
						<div className="tab-pane fade in active clearfix" id="tab1">
							<p className="title"><b>DISEÑO</b></p>
							<span>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</span>
						</div>
						<div className="tab-pane fade clearfix" id="tab2">
							<p className="title"><b>PROYECTOS</b></p>
							<span>We tried to make very high-quality product and so our code is very neat and clean. Whatever anyone could improve and modify the template to your liking.</span>
						</div>
						<div className="tab-pane fade clearfix" id="tab3">
							<p className="title"><b>CONSTRUCCIÓN</b></p>
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
        );
    }
}