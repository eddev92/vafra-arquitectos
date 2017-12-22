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

					<div className="pull-right">
						<nav className="navmenu center">
							<ul>
								<li className="first active scroll_btn"><a href="#home" >Inicio</a></li>
								<li className="scroll_btn"><a href="#about" >Nosotros</a></li>
								<li className="scroll_btn"><a href="#projects" >Servicios</a></li>
								<li className="scroll_btn"><a href="#sells" >Ventas</a></li>
								<li className="scroll_btn"><a href="#gallery" >Galería</a></li>
								{/*<li className="scroll_btn"><a href="#news" >News</a></li>*/}
								<li className="scroll_btn last"><a href="#contacts"  data-toggle="modal" data-target="#modal-contactos">Contactos</a></li>


<div className="modal fade" id="modal-contactos" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">CONTACTOS</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
					<form id="contactos">
						<div className="md-form">
								<i className="fa fa-envelope prefix grey-text"></i>
								<input type="text" id="defaultForm-nombres" className="form-control"/>
								<label htmlFor="defaultForm-nombres">Nombres y apellidos</label>
						</div>
						
						<div className="md-form">
								<i className="fa fa-envelope prefix grey-text"></i>
								<input type="text" id="defaultForm-telefono" className="form-control"/>
								<label htmlFor="defaultForm-telefono">Teléfonos</label>
						</div>
						
						<div className="md-form">
								<i className="fa fa-envelope prefix grey-text"></i>
								<input type="text" id="defaultForm-correo" className="form-control"/>
								<label htmlFor="defaultForm-correo">Correo electrónico</label>
						</div>
						<div className="md-form textarea">
								<i className="fa fa-envelope prefix grey-text"></i>
											<textarea type="text" id="form8" class="md-textarea" style={{height: 60}}></textarea>
								<label htmlFor="defaultForm-mensaje">Mensaje</label>
						</div>
						<div className="text-center">
								<button className="btn btn-default">Contactar</button>
						</div>
				</form>
            </div>
            {/*<div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>*/}
        </div>
    </div>
</div>

							</ul>
						</nav>
					</div>
				</div>
			</div>
		</header>
    );
  }
}
