Vue.component('navbar', {
    template: /*html*/ `
        <div class="navbar fixed w-screen z-10 bg-gray-800 md:bg-opacity-75 shadow-lg py-4" :class="{ 'navbar--hidden': !showNavbar }">
            <div class="hidden mx-auto py-4">
                <img class="mx-auto md:w-28 lg:w-38 h-auto" src="" alt="logo de Aires Porteños">
            </div>
            <div class="max-w-7xl mx-auto px-2 sm:px-3">
                <div class="flex justify-between items-center sm:py-4 py-2 md:justify-start md:space-x-10">
                    <div class="justify-start md:w-0 md:flex-1 bg-fixed ml-4">
                        <h1 class="md:hidden text-gray-100 tracking-widest text-lg text-light">Aires Porteños</h1>
                        <img class="hidden mx-auto w-20 h-auto" src="" alt="logo de Aires Porteños">
                    </div>
                    <div class="md:hidden">
                        <button @click="isOpen = !isOpen" type="button" class="mr-4 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-300">
                        <span class="sr-only">Open menu</span>
                        <!-- Heroicon name: menu -->
                        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        </button>
                    </div>
                    <nav id="menu" class="hidden md:flex space-x-10 menu">
                        <a href="#home" data-scrollspy="#home" class="text-base font-medium text-gray-300 hover:text-gray-100 active">
                        Inicio
                        </a>
                        <a href="#about-us" data-scrollspy="#about-us" class="text-base font-medium text-gray-300 hover:text-gray-100">
                        Quiénes Somos
                        </a>
                        <a href="#our-menu" data-scrollspy="#our-menu" class="text-base font-medium text-gray-300 hover:text-gray-100">
                        Nuestro menú
                        </a>
                        <a href="#contact" data-scrollspy="#contact" class="text-base font-medium text-gray-300 hover:text-gray-100">
                        Contacto
                        </a>
                        <a href="#gallery" data-scrollspy="#gallery" class="text-base font-medium text-gray-300 hover:text-gray-100">
                        Galería de fotos
                        </a>
                    </nav>
                    <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0"></div>
                </div>
                <div v-if="isOpen" class="w-full flex flex-col ml-4 menu">
                    <a href="#home" data-scrollspy="#home" class="text-base font-medium text-gray-100 hover:text-gray-100 my-2 active">
                    Inicio
                    </a>
                    <a href="#about-us" data-scrollspy="#about-us" class="text-base font-medium text-gray-100 hover:text-gray-100 my-2">
                    Quiénes Somos
                    </a>
                    <a href="#our-menu" data-scrollspy="#our-menu" class="text-base font-medium text-gray-100 hover:text-gray-100 my-2">
                    Nuestro menú
                    </a>
                    <a href="#contact" data-scrollspy="#contact" class="text-base font-medium text-gray-100 hover:text-gray-100 my-2">
                    Contacto
                    </a>
                    <a href="#gallery" data-scrollspy="#gallery" class="text-base font-medium text-gray-100 hover:text-gray-100 my-2">
                    Galería de fotos
                    </a>
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            isOpen: false,
            showNavbar: true,
            lastScrollPosition: 0
        }
    },
    methods: {
        onScroll() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
            if (currentScrollPosition < 0) {
                return
            }
            // Stop executing this function if the difference between
            // current scroll position and last scroll position is less than some offset
            if (Math.abs(currentScrollPosition - this.lastScrollPosition) < 40) {
                if (this.isOpen) this.isOpen = !this.isOpen
                return
            }
            this.showNavbar = currentScrollPosition < this.lastScrollPosition
            this.lastScrollPosition = currentScrollPosition
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll)
    }
});

Vue.component('slider-section', {
    template: /*html*/ `
    <div id="home" class="img-slider w-screen h-screen">
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover actived"
            style="background-image:url('assets/slider/IMG_(1).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h1 class="font-semibold text-5xl">AIRES PORTEÑOS</h1>
                <p class="my-5 text-lg font-light">Sea cautivado por la verdadera experiencia porteña: ideal para aquellos sibaritas que buscan calidad y abundancia.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/slider/IMG_(2).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Nuestro acogedor establecimiento le ofrece una experiencia única:</h2>
                <p class="mb-5 text-lg font-light">Una completa carta de mariscos, pescados y carnes para disfrutar mientras goza de la asombrosa vista 
                al mar de Valparaíso en nuestro amplio salón.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/slider/IMG_(3).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Así como el mar cautivó al célebre poeta, nuestro menú recoge la inspiración de las aguas chilenas.</h2>
                <p class="mb-5 text-lg font-light">“Déjanos
                cosechar la infinita
                plantación de tus vidas,
                tus trigos y tus uvas,
                tus bueyes, tus metales,
                el esplendor mojado
                y el fruto sumergido.”
                Pablo Neruda, Oda al mar.
                </p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/slider/IMG_(4).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Trabajamos en pos de su comodidad y deleite.</h2>
                <p class="mb-5 text-lg font-light">La atención dedicada y detallista de todo el personal es uno de los fundamentos de nuestra ética laboral. Nada nos interesa más 
                que hacer de nuestro establecimiento un lugar para que usted disfrute de la experiencia que brindamos.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/slider/IMG_(5).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Los platos tradicionales de la cocina porteña le esperan.</h2>
                <p class="mb-5 text-lg font-light">“y al descubierto queda
                entonces
                el racimo del mar,
                el congrio tierno
                reluce
                ya desnudo,
                preparado
                para nuestro apetito.”
                Pablo Neruda, Oda al caldillo de congrio.
                </p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/slider/IMG_(6).jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Disfrute de la costanera porteña.</h2>
                <p class="mb-5 text-lg font-light">Alejado del ajetreo citadino, usted podrá relajarse luego de un día de playa en las costas cercanas -entre las 
                cuales nuestro establecimiento se propone como punto de reunión-y se deleitará con un ambiente íntimo, afable y exquisito.</p>
            </div>
        </div>
        <div class="navigation">
            <button class="btn actived"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
            <button class="btn"></button>
        </div>
    </div>
    `,
});

Vue.component('hero-section', {
    template: /*html*/ `
        <div id="home" class="h-screen w-screen relative pt-16 pb-32 flex content-center items-center justify-center scrollspy">
            <div class="absolute top-0 w-full h-full bg-center bg-cover"
                style="background-image:url('assets/bg.jpg')">
                <span class="w-full h-full absolute opacity-75 bg-blue-800"></span></div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                        <div class="px-4 text-gray-100">
                            <h1 class="font-semibold text-5xl">Restaurant Aires Porteños</h1>
                            <p class="my-5 text-lg font-light">Cras nisl mauris,
                            varius et augue sit amet, laoreet lobortis magna. Aliquam lacinia mauris in diam facilisis lobortis.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut
                            molestie, erat eget faucibus rhoncus, quam felis malesuada elit, eget suscipit augue ex non nibh.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden hidden"
                style="height:70px;transform:translateZ(0)"><svg class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100"
                    x="0" y="0">
                    <polygon class="text-gray-300 fill-current" points="2560 0 2560 100 0 100"></polygon>
                </svg></div>
        </div>
    `,
});

Vue.component('about-section', {
    template: /*html*/ `
        <div id="about-us" class="mx-auto bg-blue-400 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-100 text-center pb-8">¿Quiénes Somos?</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-100 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-100">En la zona costera de Valparaíso se 
                encuentra Aires Porteños. Influenciado por su enclave, el restaurante se especializa en mariscos y pescados. Sienta el placer 
                de ser arrullado por los músicos de puerto que abundan en la zona, mientras saborea nuestra gustosa comida tradicional y se 
                deleita con la vastedad del océano frente a usted.</p>
            </div>
        </div>
    `,
});
Vue.component('menu-section', {
    template: /*html*/ `
        <div id="our-menu" class="mx-auto bg-gray-700 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-100 text-center pb-8">Nuestro menú</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-100 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24 text-center">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-100">Siempre privilegiando la frescura y 
                nobleza de nuestros ingredientes, nos preocupamos por ofrecerle una experiencia que encante a quien nos visite. Saboree 
                los platos inspirados en la comida tradicional portuaria como la reineta frita o el caldillo de congrio. Si busca, en cambio, 
                platos de un refinamiento exquisito le recomendamos las sugerencias del chef: el salmón marinado en finas hierbas o el 
                congrio san valentín seducen a los sibaritas más exigentes.
                </p>
                <a href="https://www.airesportenosrestaurant.cl/menuairespotenos.pdf" target="_blank"
                    class="bg-gray-200 hover:bg-gray-300 py-3 px-12 mx-auto my-8 inline-block text-xl uppercase rounded-sm">Ver Menú</a>
            </div>
        </div>
    `,
});

Vue.component('contact-section', {
    template: /*html*/ `
        <div id="contact" class="relative mx-auto text-gray-800 py-12 scrollspy bg-cover bg-opacity-50 bg-green-100 " style="/*background:url('https://images.unsplash.com/photo-1574111877638-7a317ab18f50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80') no-repeat center center fixed;background-size: cover;*/">
            <h1 class="font-medium text-3xl md:text-5xl text-center pb-8">Contacto</h1>
            <div class="relative">
                <div class="line-onside-dark grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-800 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg mb-8">Medios por los cuales nos puede contactar:</p>
                <ul class="text-left list-none">
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="18"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile"
                                class="svg-inline--fa fa-mobile fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z">
                                </path>
                            </svg>&nbsp;Número de contacto</h4>
                        <p class="mx-3 my-1"><a href="tel:+56971796817" class="font-light">+56 9 7179 6817</a></p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="18"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope"
                                class="svg-inline--fa fa-envelope fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512">
                                <path fill="currentColor"
                                    d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                                </path>
                            </svg>&nbsp;Correo electrónico</h4>
                        <p class="mx-3 my-1"><a href="mailto:canesoto30@hotmail.com"
                                class="font-light">canesoto30@hotmail.com</a></p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="20" height="20"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-clock"
                                class="svg-inline--fa fa-user-clock fa-w-20" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                <path fill="currentColor"
                                    d="M496 224c-79.6 0-144 64.4-144 144s64.4 144 144 144 144-64.4 144-144-64.4-144-144-144zm64 150.3c0 5.3-4.4 9.7-9.7 9.7h-60.6c-5.3 0-9.7-4.4-9.7-9.7v-76.6c0-5.3 4.4-9.7 9.7-9.7h12.6c5.3 0 9.7 4.4 9.7 9.7V352h38.3c5.3 0 9.7 4.4 9.7 9.7v12.6zM320 368c0-27.8 6.7-54.1 18.2-77.5-8-1.5-16.2-2.5-24.6-2.5h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h347.1c-45.3-31.9-75.1-84.5-75.1-144zm-96-112c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128z">
                                </path>
                            </svg>&nbsp;Horario de atención</h4>
                        <p class="mx-3 font-light">Atendemos de lunes a sábados desde las 9 a 17 horas.</p>
                    </li>
                    <li class="mb-6">
                        <h4 class="font-medium text-lg my-3 text-light flex items-center"><svg width="18" height="20"
                                aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt"
                                class="svg-inline--fa fa-map-marker-alt fa-w-12" role="img"
                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor"
                                    d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                                </path>
                            </svg>&nbsp;Ubicación</h4>
                        <p class="mx-3 font-light">Altamirano 1595, Valparaíso</p>
                    </li>

                    
                </ul>
            </div>
            <div class="mx-auto mapouter mb-3 mx-4">
                <div class="gmap_canvas px-4"><iframe class="rounded w-11/12 mx-auto" loading="lazy" width="900"
                    height="400" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=av%20altamirano%201595&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                    href="https://www.embedgooglemap.net"></a></div>
            </div>
        </div>
    `
});

Vue.component('gallery-section', {
    template: /*html*/ `
        <div id="gallery" class="mx-auto py-12 scrollspy bg-gray-100">
            <h1 class="font-medium text-3xl md:text-5xl text-center pb-8">Galería de fotos</h1>
            <div class="relative">
                <div class="line-onside-dark grid items-center text-center gap-4 w-screen pb-8 mx-auto">
                    <span class="text-gray-800 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24 text-center">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-800">Nuestra comida no es 
                solo abundante y deliciosa, también la presentación de nuestros platos le sorprenderán. En Aires Porteños 
                cuidamos hasta el último detalle: desde los ingredientes de primera calidad que ofrecemos, hasta la forma 
                en que los servimos en su mesa.
                </p>
            </div>
            <div class="gallery-section">
                <div class="inner-width">
                    <div class="gallery">
                        <a href="assets/gallery/IMG_(1).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(1).jpg" alt="Imagen 1">
                        </a>
                        <a href="assets/gallery/IMG_(2).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(2).jpg" alt="Imagen 2">
                        </a>
                        <a href="assets/gallery/IMG_(3).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(3).jpg" alt="Imagen 3">
                        </a>
                        <a href="assets/gallery/IMG_(4).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(4).jpg" alt="Imagen 4">
                        </a>
                        <a href="assets/gallery/IMG_(5).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(5).jpg" alt="Imagen 5">
                        </a>
                        <a href="assets/gallery/IMG_(6).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(6).jpg" alt="Imagen 6">
                        </a>
                        <a href="assets/gallery/IMG_(7).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(7).jpg" alt="Imagen 7">
                        </a>
                        <a href="assets/gallery/IMG_(9).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(9).jpg" alt="Imagen 9">
                        </a>
                        <a href="assets/gallery/IMG_(8).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(8).jpg" alt="Imagen 8">
                        </a>
                        <a href="assets/gallery/IMG_(11).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(11).jpg" alt="Imagen 11">
                        </a>
                        <a href="assets/gallery/IMG_(13).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(13).jpg" alt="Imagen 13">
                        </a>
                        <a href="assets/gallery/IMG_(14).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(14).jpg" alt="Imagen 14">
                        </a>
                        <a href="assets/gallery/IMG_(15).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(15).jpg" alt="Imagen 15">
                        </a>
                        <a href="assets/gallery/IMG_(16).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(16).jpg" alt="Imagen 16">
                        </a>
                        <a href="assets/gallery/IMG_(17).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(17).jpg" alt="Imagen 17">
                        </a>
                        <a href="assets/gallery/IMG_(18).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(18).jpg" alt="Imagen 18">
                        </a>
                        <a href="assets/gallery/IMG_(19).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(19).jpg" alt="Imagen 19">
                        </a>
                        <a href="assets/gallery/IMG_(20).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(20).jpg" alt="Imagen 20">
                        </a>
                        <a href="assets/gallery/IMG_(21).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(21).jpg" alt="Imagen 21">
                        </a>
                        <a href="assets/gallery/IMG_(22).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(22).jpg" alt="Imagen 22">
                        </a>
                        <a href="assets/gallery/IMG_(12).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(12).jpg" alt="Imagen 12">
                        </a>
                        <a href="assets/gallery/IMG_(23).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(23).jpg" alt="Imagen 23">
                        </a>
                        <a href="assets/gallery/IMG_(24).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(24).jpg" alt="Imagen 24">
                        </a>
                        <a href="assets/gallery/IMG_(25).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(25).jpg" alt="Imagen 25">
                        </a>
                        <a href="assets/gallery/IMG_(26).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(26).jpg" alt="Imagen 26">
                        </a>
                        <a href="assets/gallery/IMG_(27).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(27).jpg" alt="Imagen 27">
                        </a>
                        <a href="assets/gallery/IMG_(28).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(28).jpg" alt="Imagen 28">
                        </a>
                        <a href="assets/gallery/IMG_(10).jpg" class="image">
                            <img loading="lazy" src="assets/gallery/IMG_(10).jpg" alt="Imagen 10">
                        </a>
                    </div>
                    <button class="load-more text-white w-full block bg-gray-400 hover:bg-gray-700 py-3 px-12 mx-auto my-8 inline-block text-xl uppercase rounded-sm">Ver más</button>
                    <button class="load-less text-white w-full block bg-gray-400 hover:bg-gray-700 py-3 px-12 mx-auto my-8 inline-block text-xl uppercase rounded-sm">Ver menos</button>
                </div>
            </div>
        </div>
    `,
});

Vue.component('footer-section', {
    template: /*html*/ `
        <footer>
            <div class="bg-gray-700 text-center text-gray-100 py-4">
                <div class="container mx-auto flex md:flew-col mb-4">
                    <div class="flex items-center flex-col md:flex-row w-3/5">
                        <div class="mb-3">
                            <span class="uppercase tracking-wide text-sm">Aires Porteños</span>
                        </div>
                        <div class="ml-3 text-justify">
                            <p class="font-regular text-sm">Disfrute de la costumbre portuaria por excelencia deleitándose con nuestros sabrosos platos inspirados en la gastronomía 
                            marítima de Valparaíso. Le ofrecemos una experiencia inolvidable.</p>
                        </div>
                    </div>
                    <div class="w-2/5 m-auto">
                        <h3 class="mb-3">Enlaces útiles</h3>
                        <ul>
                            <li class="font-regular text-sm mb-2"><a href="#home" data-scrollspy="#home" class="text-gray-100 hover:text-gray-300">Inicio</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#about-us" data-scrollspy="#about-us" class="text-gray-100 hover:text-gray-300">Quiénes Somos</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#our-menu" data-scrollspy="#our-menu" class="text-gray-100 hover:text-gray-300">Nuestro menú</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#contact" data-scrollspy="#contact" class="text-gray-100 hover:text-gray-300">Contacto</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#gallery" data-scrollspy="#gallery" class="text-gray-100 hover:text-gray-300">Galería de fotos</a></li>
                        </ul>
                    </div>
                </div>
                <hr class="border-gray-700 mx-4 pt-4">
                <p class="font-regular">Desarrollado por <strong><a class="no-underline hover:text-gray-300"
                            href="https://www.softmaking.cl/">SOFTMAKING</a></strong> © 2020</p>
            </div>
        </footer>
    `,
});


const store = new Vuex.Store({
    state: {
        products: []
    },
    mutations: {},
    actions: {},
});

new Vue({
    el: "#app",
    store,
    data: {},
    computed: {},
    methods: {},
    mounted() { },
});