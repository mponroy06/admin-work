import '../css/header.css';

function Header(){
    return(
        <header>
            <div className='logo'>Terratable</div>
            <nav>
                <ul>
                    <li><a href="#">Général</a></li>
                    <li><a href="#">Catégorie</a></li>
                    <li><a href="#">Produits</a></li>
                    <li><a href="#">Producteurs</a></li>
                    <li><a href="#">Recettes</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;