function Form() {
     return (
          <>
               <form action="submit" id="form">
                    <div className="contenido">
                         <label htmlFor="usuario">Ingrese su usuario</label>
                         <input type="text" id="usuario" name="usuario"/>
                    </div>

                    <div className="contenido">
                         <label htmlFor="pass">Contraseña</label>
                         <input type="password" name="pass" id="pass" />
                    </div>

                    <div className="contenido">
                         <label htmlFor="email">Email</label>
                         <input type="email" name="email" id="email" />
                    </div>

                    <div className="contenido">
                         <select name="select">
                              <option disabled selected>Motivo del contacto</option>
                              <option value="Seguimiento de producto">Seguimiento de producto</option>
                              <option value="Reembolso">Reembolso</option>
                              <option value="Consulta valores mayoristas">Consulta valores mayoristas</option>
                         </select>
                    </div>

                    <button id="envio" type="submit" form="form">Enviar</button>
               </form>
          </>
     );
}

export default Form;