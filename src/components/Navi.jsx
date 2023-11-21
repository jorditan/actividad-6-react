const options = ['Inicio', 'Contacto', 'Sobre nosotros'];

function Navi() {
    return (
        <>
            <nav className="navBar">
                <div className="navBrand">
                    <h2>¡Contacto!</h2>
                </div>
                <ul className="menu-list">
                    {
                        options.map((e) => {
                            return <li  className="menu-item" key={e}><a href="#">{e}</a></li>
                        })
                    }
                </ul>
            </nav>
        </>
    );
}

export default Navi;