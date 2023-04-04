$(document).ready(function(){
    // Menú NAV y menú azul
    $(`<nav>
        <a href="index.html"><img src="assets/img/logo-angels.png" alt="Logo"></a>
        <p class="titulo">Inversores</p>
        <div class="botones">
            <p><i class="fi fi-rr-user"></i>Perfil</p>
            <p><i class="fi fi-rr-sign-out-alt"></i>Cerrar sesión</p>
        </div>
    </nav>`).prependTo('body');

})