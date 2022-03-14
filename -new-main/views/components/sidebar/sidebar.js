class Sidebar extends HTMLElement{
    connectedCallback(){
        this.innerHTML=`
        <div class="sidebar">
        <div class="logo-details">
           <div class="logo_name">APS</div>
           <i class='bx bx-menu' id="btn"></i>
        </div>
        <ul class="nav-list">
           <li>
              <a href="#">
              <i class='bx bx-grid-alt'></i>
              <span class="links_name">Home</span>
              </a>
              <span class="tooltip">Home</span>
           </li>
           <li>
              <a href="#">
              <i class='bx bxs-calendar-check'></i>
              <span class="links_name">Tickets</span>
              </a>
              <span class="tooltip">Tickets</span>
           </li>
           <li>
              <a href="../../screens/sales_flow/sales_flow.html">
              <i class='bx bx-line-chart'></i>
              <span class="links_name">Sales Flow</span>
              </a>
              <span class="tooltip">Sales_Flow</span>
           </li>
           <li>
           <a href="../../screens/sales_flow/sales_flow.html">
           <i class="fa-solid fa-receipt"></i>
           <span class="links_name">Quotation</span>
           </a>
           <span class="tooltip">Quotation</span>
        </li>
        </ul>
     </div>
        `
        let sidebar = document.querySelector(".sidebar");
        let closeBtn = document.querySelector("#btn");
        let searchBtn = document.querySelector(".bx-search");
        
        closeBtn.addEventListener("click", () => {
           sidebar.classList.toggle("open");
           menuBtnChange();//calling the function(optional)
        });
        
        searchBtn.addEventListener("click", () => { // Sidebar open when you click on the search iocn
           sidebar.classList.toggle("open");
           menuBtnChange(); //calling the function(optional)
        });
        
        
        function menuBtnChange() {
           if (sidebar.classList.contains("open")) {
              closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
           } else {
              closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
           }
        }
        
        function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
        }
        
    }

   
       
}


customElements.define('side-bar', Sidebar);