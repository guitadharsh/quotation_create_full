class Navbar extends HTMLElement {
    connectedCallback(String){
        this.innerHTML = `
        <nav class="navbar sticky-top navbar-light bg-light ">
        <div class="container-fluid">
           <a class="navbar-brand" href="#"><b>Sales Flow</b></a>
           <li class="nav-item dropdown d-flex " id="profile_dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
                 data-bs-toggle="dropdown" aria-expanded="false">
              Sagar
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                 <li><a class="dropdown-item" href="#">My profile</a></li>
                 <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
           </li>
        </div>
     </nav>
        `
    }
}

customElements.define('navbar-component', Navbar);