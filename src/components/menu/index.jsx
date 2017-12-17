import React, { Component } from 'react';
import './index.css';

export class MenuComponent extends Component {
  render() {
    return (
		<header>

			<div className="menu_block">

				<div className="container clearfix">

					<div className="logo pull-left">
						<img src="images/logo.png" alt=""/>
					</div>

					{/*<div id="search-form" className="pull-right">
						<form method="get" action="#">
							<input type="text" name="Search" value="Search" onFocus="if (this.value == 'Search') this.value = '';" onBlur="if (this.value == '') this.value = 'Search';" />
						</form>
					</div>*/}

					<div className="pull-right">
						<nav className="navmenu center">
							<ul>
								<li className="first active scroll_btn"><a href="#home" >Inicio</a></li>
								<li className="scroll_btn"><a href="#about" >Nosotros</a></li>
								<li className="scroll_btn"><a href="#projects" >Servicios</a></li>
								<li className="scroll_btn"><a href="#team" >Galería</a></li>
								{/*<li className="scroll_btn"><a href="#news" >News</a></li>*/}
								<li className="scroll_btn last"><a href="#contacts" >Contactos</a></li>
								{/*<li className="sub-menu">
									<a href="javascript:void(0);" >Pages</a>
									<ul>
										<li><a href="blog.html" >Blog</a></li>
										<li><a href="blog-post.html" >Blog Post</a></li>
										<li><a href="portfolio-post.html" >Portfolio Single Work</a></li>
									</ul>
								</li>*/}
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
    );
  }
}
