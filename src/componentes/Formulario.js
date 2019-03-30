import React, { Component } from 'react';

class Formulario extends Component {
    
    //crear refs
    ciudadRef = React.createRef();
    paisRef = React.createRef();
    
    buscarClima = (e) =>{
        e.preventDefault();
    
    //leer los refs
    const respuesta = {
        ciudad: this.ciudadRef.current.value,
        pais: this.paisRef.current.value,
    }
    // console.log(respuesta);
    
    
    //enviar props
    this.props.datosConsulta(respuesta);

    }

    render() { 
        return ( 
            <div className="contenedor-form">
                <div className="container">
                    <div className="row">
                        <form onSubmit={this.buscarClima}>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <input id="ciudad" ref={this.ciudadRef} type="text" />
                                <label htmlFor="ciudad">Ciudad:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-m2">
                                <select ref={this.paisRef}> 
                                    <option value="" defaultValue>
                                        Selecciona un Pais
                                    </option>
                                    <option value="AR">Argentina</option>
                                    <option value="CO">Colombia</option>
                                    <option value="CR">Costa Rica</option>
                                    <option value="ES">España</option>
                                    <option value="US">Estado Unidos</option>
                                    <option value="MX">Mexico</option> 
                                </select>
                                <label htmlFor="pais">País:</label>
                            </div>
                            <div className="input-field col s12 m8 l4 offset-2 buscador">
                                   <input type="submit" className="waves-effect waces-light 
                                   btn-large yellow accent-4" value="Buscar.." /> 

                            </div>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Formulario;