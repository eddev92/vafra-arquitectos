import React, { Component } from 'react';
import './index.css';

export default class OurTeamComponent extends Component {
  render() {
    return (
        <section id="team">
			<div class="container">
				<h2><b>Nuestro</b> Equipo</h2>

				<div class="row" data-appear-top-offset="-200" data-animated="fadeInUp">

					<div class="owl-demo owl-carousel team_slider">

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/patricia.png" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Patricia Alvarado Blas</p>
										<span>Arquitecto</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/annie.png" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Annie Pacheco Obando</p>
										<span>Arquitecto</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team3.png" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Integrante 3</p>
										<span>Arquitecto</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>
						{/* <div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/2.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>David Jones</p>
										<span>Creative Director</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-google-plus"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/3.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Kate Smith</p>
										<span>Manager</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/4.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Peter Parker</p>
										<span>Manager</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/5.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Jim Moss</p>
										<span>Designer</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-google-plus"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/6.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>John Marks</p>
										<span>Designer</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/7.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Joe Mades</p>
										<span>Developer</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div>

						<div class="item">
							<div class="crewman_item">
								<div class="crewman">
									<img src="images/team/8.jpg" alt="" />
								</div>
								<div class="crewman_descr center">
									<div class="crewman_descr_cont">
										<p>Julia Anderson</p>
										<span>Developer</span>
									</div>
								</div>
								<div class="crewman_social">
									<a href="javascript:void(0);" ><i class="fa fa-google-plus"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-twitter"></i></a>
									<a href="javascript:void(0);" ><i class="fa fa-facebook-square"></i></a>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</section>
        )
    }
}
