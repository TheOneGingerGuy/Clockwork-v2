class SiteHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <header class="relative flex items-center w-full text-white border-b-4 border-black bg-[#1e1a4d]">
            <h1 class="text-[75px] mx-auto">Clockwork</h1>
            <nav class="absolute right-0">
                <ul class="flex gap-6">
                    <li><a href="./view/about.html">About</a></li>
                    <li><a href="./calendar.html">Student Calendar</a></li>
                    </ul>
                </nav>
        </header>
        `;
                    
    }
}
customElements.define("site-header", SiteHeader);