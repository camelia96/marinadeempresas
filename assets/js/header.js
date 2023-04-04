$(document).ready(function(){
    // Menú NAV y menú azul
    $(`<nav>
        <a href="index.html"><img src="assets/img/Logo_lanzadera_founders.png" alt="Logo"></a>
        <div class="botones">
            <p><i class="fi fi-rr-user"></i>Perfil</p>
            <p><i class="fi fi-rr-sign-out-alt"></i>Cerrar sesión</p>
        </div>
    </nav>
    
    <div id="menu-azul">
            <p><i class="fi fi-rr-search"></i><a href="">Directorio</a></p>
            <p><i class="fi fi-rr-star"></i><a href="">Ventajas Founders</a></p>
            <p><i class="fi fi-rr-percentage"></i><a href="">Perks</a></p>
            <p><i class="fi fi-rr-computer"></i><a href="">Reserva puesto</a></p>
        </div>`).prependTo('body');

})