import React, { Component } from 'react';

export default class GaleryComponent extends Component {
  render() {
    return (
        <section className="padbot20" id="gallery">
			<div className="container">
				<h2><b>Galería</b> Proyectos</h2>
			</div>
			<div className="projects-wrapper" data-appear-top-offset="-200" data-animated="fadeInUp">
				<div className="owl-demo owl-carousel projects_slider">
					<div className="item">
						<div className="work_item">
							<div className="work_img">
								<img src="images/playa-bujamas/portada.jpg" alt="" />
								<a className="zoom" href="images/works/1.jpg" rel="prettyPhoto[portfolio1]" ></a>
							</div>
							<div className="work_description">
								<div className="work_descr_cont">
									<a href="portfolio-post.html" >Proyecto titulo</a>
									<span>Distrito</span>
								</div>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="work_item">
							<div className="work_img">
								<img src="images/playa-totoritas/portada.jpg" alt="" />
								<a className="zoom" href="images/works/2.jpg" rel="prettyPhoto[portfolio1]" ></a>
							</div>
							<div className="work_description">
								<div className="work_descr_cont">
									<a href="portfolio-post.html" >Proyecto titulo</a>
									<span>Distrito</span>
								</div>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="work_item">
							<div className="work_img">
								<img src="images/terrazas-ampliacion/terraza1.jpg" alt="" />
								<a className="zoom" href="images/works/3.jpg" rel="prettyPhoto[portfolio1]" ></a>
							</div>
							<div className="work_description">
								<div className="work_descr_cont">
									<a href="portfolio-post.html" >Proyecto titulo</a>
									<span>Distrito</span>
								</div>
							</div>
						</div>
					</div>

					<div className="item">
						<div className="work_item">
							<div className="work_img">
								<img src="images/residencial-vafra/portada.jpg" alt="" />
								<a className="zoom" href="images/works/4.jpg" rel="prettyPhoto[portfolio1]" ></a>
							</div>
							<div className="work_description">
								<div className="work_descr_cont">
									<a href="portfolio-post.html" >Proyecto titulo</a>
									<span>Distrito</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="our_clients">

				<div className="container" data-appear-top-offset="-200" data-animated="fadeInUp">

					<div className="row">
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/1.jpg" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/2.jpg" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/3.jpg" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/4.jpg" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/5.jpg" alt="" />
						</div>
						<div className="col-lg-2 col-md-2 col-sm-2 client_img">
							<img src="images/clients/6.jpg" alt="" />
						</div>
					</div>
				</div>
			</div> */}
		</section>
    )
  }
}
