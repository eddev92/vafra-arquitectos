import React, { Component } from 'react';

export class Menu extends Component {
  render() {
    return (
		<header>

			<div className="menu_block">

				<div className="container clearfix">

					<div className="logo pull-left">
						<a href="index.html" ><span className="b1">w</span><span className="b2">h</span><span className="b3">i</span><span className="b4">t</span><span className="b5">e</span></a>
					</div>

					<div id="search-form" className="pull-right">
						<form method="get" action="#">
							<input type="text" name="Search" value="Search" onFocus="if (this.value == 'Search') this.value = '';" onBlur="if (this.value == '') this.value = 'Search';" />
						</form>
					</div>

					<div className="pull-right">
						<nav className="navmenu center">
							<ul>
								<li className="first active scroll_btn"><a href="#home" >Home</a></li>
								<li className="scroll_btn"><a href="#about" >About Us</a></li>
								<li className="scroll_btn"><a href="#projects" >Projects</a></li>
								<li className="scroll_btn"><a href="#team" >Team</a></li>
								<li className="scroll_btn"><a href="#news" >News</a></li>
								<li className="scroll_btn last"><a href="#contacts" >Contacts</a></li>
								<li className="sub-menu">
									<a href="javascript:void(0);" >Pages</a>
									<ul>
										<li><a href="blog.html" >Blog</a></li>
										<li><a href="blog-post.html" >Blog Post</a></li>
										<li><a href="portfolio-post.html" >Portfolio Single Work</a></li>
									</ul>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
    );
  }
}
