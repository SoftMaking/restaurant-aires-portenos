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
            style="background-image:url('assets/bg-2.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h1 class="font-semibold text-5xl">Restaurante Aires Porteños</h1>
                <p class="my-5 text-lg font-light">Phasellus consequat eu ipsum a convallis. In at porta purus, vel fringilla massa. Sed eleifend maximus est. Suspendisse in malesuada justo. Sed felis mauris, dictum id mollis eget, tincidunt ac odio. Ut pulvinar feugiat interdum. Sed pharetra metus ac purus hendrerit porta.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/alinos_y_especias.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Aliños y especias</h2>
                <p class="mb-5 text-lg font-light">Trabajamos gran variedad de aliños y especias para que 
                pueda utilizar en cada una de sus preparaciones e incluso nuevos sabores para que pueda 
                experimentar en cada comida.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/decoracion_torta.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Decoración torta</h2>
                <p class="mb-5 text-lg font-light">Con nuestros productos de repostería podrás preparar deliciosas tortas, 
                postres y bizcochos. Su excelente calidad les permite ser un gran aporte para el sabor y presentación de 
                diversas recetas.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/frutossecos_y_manies.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Frutos secos y manies</h2>
                <p class="mb-5 text-lg font-light">Los Frutos Secos pueden degustarse solos o como acompañamiento 
                en diferentes preparaciones. Sus sabores y texturas permiten generar diferentes sensaciones en un 
                mismo plato, además de otorgar beneficios para la salud, convirtiéndolos en un ingrediente fundamental 
                en la alimentación balanceada.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/grupo_encurtidos.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Grupo encurtidos</h2>
                <p class="mb-5 text-lg font-light">Los encurtidos son un producto clásico en todas las 
                mesas vegetales, otorgando un sabor característico utilizado en la gastronomía de muchos 
                países, entre los que se encuentra Chile obviamente. En esta página podrás cotizar todos 
                los encurtidos que tenemos a su disposición.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/linea_tostaduria.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Línea tostaduría</h2>
                <p class="mb-5 text-lg font-light">Trabajamos los mejores productos tostados, confitadas, semillas y 
                granos para llevarlos a su mesa.</p>
            </div>
        </div>
        <div class="slide absolute top-0 w-full h-full bg-center bg-cover"
            style="background-image:url('assets/banners/grupo_fiesta.jpg')">
            <span class="w-full h-full absolute opacity-50 bg-black"></span>
            <div class="info flex h-screen justify-center items-center text-center text-white">
                <h2 class="my-5 text-3xl md:text-5xl font-regular capitalize">Grupo fiesta</h2>
                <p class="mb-5 text-lg font-light">Tenemos todo lo que necesita para hacer su celebración más entretenida.</p>
            </div>
        </div>
        <div class="navigation">
            <button class="btn actived"></button>
            <button class="btn"></button>
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
        <div id="about-us" class="mx-auto bg-blue-800 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-100 text-center pb-8">¿Quiénes Somos?</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-100 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-100">Cras nisl mauris, varius et augue sit amet, laoreet lobortis magna. Aliquam lacinia mauris in diam facilisis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut molestie, erat eget faucibus rhoncus, quam felis malesuada elit, eget suscipit augue ex non nibh. </p>
            </div>
        </div>
    `,
});
Vue.component('menu-section', {
    template: /*html*/ `
        <div id="our-menu" class="mx-auto bg-gray-800 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-gray-100 text-center pb-8">Nuestro menú</h1>
            <div class="relative">
                <div class="line-onside grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-100 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24 text-center">
                <p class="font-medium text-md text-justify md:text-center md:text-lg text-gray-100">Cras nisl mauris,
                    varius et augue sit amet, laoreet lobortis magna. Aliquam lacinia mauris in diam facilisis lobortis.
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut
                    molestie, erat eget faucibus rhoncus, quam felis malesuada elit, eget suscipit augue ex non nibh.
                </p>
                <a href="https://www.airesportenosrestaurant.cl/menuairespotenos.pdf" target="_blank"
                    class="bg-gray-200 hover:bg-gray-300 py-3 px-12 mx-auto my-8 inline-block text-xl uppercase rounded-sm">Ver Menú</a>
            </div>
        </div>
    `,
});

Vue.component('contact-section', {
    template: /*html*/ `
        <div id="contact" class="mx-auto bg-gray-100 text-gray-800 py-12 scrollspy">
            <h1 class="font-medium text-3xl md:text-5xl text-center pb-8">Contacto</h1>
            <div class="relative">
                <div class="line-onside-dark grid items-center text-center gap-4 w-screen pb-8">
                    <span class="text-gray-800 uppercase tracking-widest">Aires Porteños</span>
                </div>
            </div>
            <div class="container mx-auto px-8 md:px-24">
                <p class="font-medium text-md text-justify md:text-center md:text-lg mb-8">Cras nisl mauris,
                varius et augue sit amet, laoreet lobortis magna. Aliquam lacinia mauris in diam facilisis lobortis.
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
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
                        <p class="mx-3 my-1"><a href="tel:+56966940056" class="font-light">+56 9 6694
                                0056</a></p>
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
                        <p class="mx-3 my-1"><a href="mailto:example@domain.com"
                                class="font-light">example@domanin.com</a></p>
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
                        <p class="mx-3 font-light">Lugar de ubicación</p>
                    </li>

                    
                </ul>
            </div>
            <div class="mx-auto mapouter mb-3 mx-4">
                <div class="gmap_canvas px-4"><iframe class="rounded w-11/12 mx-auto" loading="lazy" width="900"
                    height="400" id="gmap_canvas"
                    src="https://maps.google.com/maps?q=22%20norte%201733&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a
                    href="https://www.embedgooglemap.net"></a></div>
            </div>
        </div>
    `
});

Vue.component('footer-section', {
    template: /*html*/ `
        <footer>
            <div class="bg-gray-800 text-center text-gray-100 py-4">
                <div class="container mx-auto flex md:flew-col mb-4">
                    <div class="flex items-center flex-col md:flex-row w-3/5">
                        <div class="mb-3">
                            <span class="uppercase tracking-wide text-sm">Aires Porteños</span>
                        </div>
                        <div class="ml-3 text-justify">
                            <p class="font-regular text-sm">Cras nisl mauris, varius et augue sit amet, laoreet lobortis magna. Aliquam lacinia mauris in diam facilisis lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut molestie, erat eget faucibus rhoncus, quam felis malesuada elit, eget suscipit augue ex non nibh. </p>
                        </div>
                    </div>
                    <div class="w-2/5 m-auto">
                        <h3 class="mb-3">Enlaces útiles</h3>
                        <ul>
                            <li class="font-regular text-sm mb-2"><a href="#home" data-scrollspy="#home" class="text-gray-100 hover:text-gray-300">Inicio</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#about-us" data-scrollspy="#about-us" class="text-gray-100 hover:text-gray-300">Quiénes Somos</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#our-menu" data-scrollspy="#our-menu" class="text-gray-100 hover:text-gray-300">Nuestro menú</a></li>
                            <li class="font-regular text-sm mb-2"><a href="#contact" data-scrollspy="#contact" class="text-gray-100 hover:text-gray-300">Contacto</a></li>
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
    mounted() {},
});