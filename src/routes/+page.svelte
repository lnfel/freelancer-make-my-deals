<script>
	import { onMount } from "svelte"
    import { base } from '$app/paths'
    import { slide } from 'svelte/transition'
    import { quintOut } from 'svelte/easing'
    import Swiper, { Navigation, Pagination } from 'swiper'
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'

    const recommendedProducts = [
        'Grocery and Staples', 'Celebrations', 'Fresh and Frozen Food', 'Dairy and Bakery Products',
        'Oil and Ghee', 'Personal Care', 'Snacks', 'Household Items'
    ]
    onMount(() => {
        document.addEventListener('click', closeAvatarDropdown)

        const productSuggestions = new Swiper('.swiper-product-suggestions', {
            modules: [Navigation, Pagination],
            loop: true,
            // speed: 400,
            spaceBetween: 30,
            slidesPerView: 2,
            freeMode: true,
            // pagination: {
            //     el: ".swiper-pagination",
            //     clickable: true
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
            breakpoints: {
                768: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 4
                }
            }
        })

        const productOffers = new Swiper('.swiper-offers', {
            modules: [Pagination],
            // loop: true,
            centeredSlides: true,
            spaceBetween: 30,
            slidesPerView: 1,
            // freeMode: true,
            initialSlide: 1,
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                1024: {
                    slidesPerView: 3
                }
            }
        })
    })
    let open = false
    function toggleAvatarDropdown() {
        open = !open
    }

    function closeAvatarDropdown() {
        open = false
    }

    /**
     * @param {KeyboardEvent} event
     */
    function menuKeyboardListener(event) {
        if (event.code === 'Escape') {
            closeAvatarDropdown()
        }
    }

    const spaceBetween = 10

    /**
     * 
     * @param {CustomEvent} e
     */
    const onProgress = (e) => {
        const [swiper, progress] = e.detail
        console.log(progress)
    }
    /**
     * 
     * @param {CustomEvent} e
     */
    const onSlideChange = (e) => {
        console.log('slide changed')
    }
</script>

<header class="fixed top-0 w-full z-10 px-4 lg:px-20 py-6 bg-white">
    <div class="flex items-center justify-between gap-4">
        <a href="{base}/" class="logo col-span-2 lg:col-span-1 flex items-center gap-2 self-center">
            <img src="{base}/logo-lg.png" alt="Grocer Daily logo" width="40" height="40" />

            <h1 class="text-2xl text-rose-500 uppercase whitespace-nowrap">
                M<span class="text-xl">ake</span> M<span class="text-xl">y</span> D<span class="text-xl">eals</span>
            </h1>
        </a>

        <div class="flex items-center gap-2">
            <nav class="fixed bottom-0 left-0 w-full flex items-center justify-between bg-rose-500 text-white md:bg-transparent md:text-slate-800 md:static">
                <a href="{base}#home" class="inline-block md:flex md:items-center md:gap-2 grow md:grow-0 text-center px-4 py-2 border-y-2 border-rose-500 outline-none md:border-t-0 md:border-b-2 md:border-transparent hover:bg-white md:hover:border-rose-500 hover:text-rose-500 md:focus:text-rose-500 md:focus:border-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                    </svg>
                    <span class="sr-only md:not-sr-only">Home</span>
                </a>
                <a href="{base}#shop" class="inline-block md:flex md:items-center md:gap-2 grow md:grow-0 text-center px-4 py-2 border-y-2 border-rose-500 outline-none md:border-t-0 md:border-b-2 md:border-transparent hover:bg-white md:hover:border-rose-500 hover:text-rose-500 md:focus:text-rose-500 md:focus:border-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    <span class="sr-only md:not-sr-only">Shop</span>
                </a>
                <a href="{base}#contact" class="inline-block md:flex md:items-center md:gap-2 grow md:grow-0 text-center px-4 py-2 border-y-2 border-rose-500 outline-none md:border-t-0 md:border-b-2 md:border-transparent hover:bg-white md:hover:border-rose-500 hover:text-rose-500 md:focus:text-rose-500 md:focus:border-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span class="sr-only md:not-sr-only">Contact</span>
                </a>
                <a href="{base}#faqs" class="inline-block md:flex md:items-center md:gap-2 grow md:grow-0 text-center px-4 py-2 border-y-2 border-rose-500 outline-none md:border-t-0 md:border-b-2 md:border-transparent hover:bg-white md:hover:border-rose-500 hover:text-rose-500 md:focus:text-rose-500 md:focus:border-rose-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-auto">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12" />
                    </svg>
                    <span class="sr-only md:not-sr-only">FAQs</span>
                </a>
            </nav>

            <div class="relative inline-block text-left self-center place-self-end">
                <!-- <button type="button" on:click|stopPropagation={toggleAvatarDropdown} on:keydown={menuKeyboardListener} class="w-10 h-10 p-1 rounded-full bg-white text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-rose-300 outline-none hover:bg-rose-500 focus:bg-rose-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <img src={data.auth.user?.picture} alt={data.auth.user?.name} referrerpolicy="no-referrer" class="rounded-full">
                </button> -->

                <button type="button" on:click|stopPropagation={toggleAvatarDropdown} on:keydown={menuKeyboardListener} class="w-10 h-10 p-1 rounded-full bg-white text-sm font-semibold text-gray-900 outline-none shadow-sm ring-2 ring-inset ring-slate-300 hover:ring-rose-500 focus:ring-rose-500" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 rounded-full text-slate-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </button>

                {#if open}
                    <div on:click|stopPropagation={()=>{}} on:keydown={menuKeyboardListener} transition:slide="{{delay: 250, duration: 300, easing: quintOut, axis: 'y'}}" class="absolute right-0 z-10 mt-2 whitespace-nowrap origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 p-1 focus:outline-none space-y-2" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="text-lg font-medium text-gray-700 px-4 pt-2">Taylor Otwell</div>

                        <button type="button" class="text-gray-700 flex items-center justify-between gap-2 w-full px-4 text-left text-sm rounded-md border-2 border-transparent outline-none hover:text-rose-500 focus:text-rose-500 focus:border-rose-500">
                            <span>My Cart</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </button>

                        <a href="{base}#preferences" class="text-gray-700 flex items-center justify-between gap-2 w-full px-4 text-left text-sm rounded-md border-2 border-transparent outline-none hover:text-rose-500 focus:text-rose-500 focus:border-rose-500">
                            <span>Preferences</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </a>

                        <button type="button" title="Sign Out" role="menuitem" class="text-gray-700 flex items-center justify-between gap-2 w-full px-4 py-2 text-left text-sm rounded-md border-2 border-transparent outline-none hover:text-rose-500 focus:text-rose-500 focus:border-rose-500">
                            <span>Sign Out</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                        </button>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</header>

<main>
    <section class="banner relative flex items-center justify-center h-screen bg-hero bg-cover bg-right-bottom">
        <div class="w-full">
            <div class="search pt-32 pb-32">
                <div class="group flex w-full max-w-xl lg:max-w-4xl relative text-rose-300 px-4 mx-auto">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-6 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-focus-within:text-rose-500">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input type="search" id="search" name="search" placeholder="Search product or category..." class="w-full rounded-l outline-none border-2 border-r-0 border-rose-300 focus:border-rose-500 pl-10 py-2">
                    <button class="flex items-center justify-between gap-2 px-4 py-2 bg-white text-sm rounded-r border-2 border-rose-300 outline-none hover:text-rose-500 focus:text-rose-500 focus:border-rose-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                    </button>
                </div>
            </div>
            
            <!-- flex items-center justify-between -->
            <div class="w-full max-w-xl lg:max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-2 text-center px-4 mx-auto">
                <div class="card flex flex-col items-center gap-4">
                    <div class="icon flex items-center justify-center w-20 h-20 rounded-full bg-white text-rose-500 ring ring-rose-500 ring-inset ring-offset-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                        </svg>
                    </div>
                    <span class="text-lg text-white font-bold tracking-wide">Free Shipping</span>
                </div>
    
                <div class="card flex flex-col items-center gap-4">
                    <div class="icon flex items-center justify-center w-20 h-20 rounded-full bg-white text-rose-500 ring ring-rose-500 ring-inset ring-offset-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                    </div>
                    <span class="text-lg text-white font-bold tracking-wide">Best Price Guarantee</span>
                </div>
    
                <div class="card flex flex-col items-center gap-4">
                    <div class="icon flex items-center justify-center w-20 h-20 rounded-full bg-white text-rose-500 ring ring-rose-500 ring-inset ring-offset-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>
                    </div>
                    <span class="text-lg text-white font-bold tracking-wide">Free Curbside Pickup</span>
                </div>
    
                <div class="card flex flex-col items-center gap-4">
                    <div class="icon flex items-center justify-center w-20 h-20 rounded-full bg-white text-rose-500 ring ring-rose-500 ring-inset ring-offset-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <span class="text-lg text-white font-bold tracking-wide">Free Shipping</span>
                </div>
            </div>
        </div>
    </section>

    <section class="product-suggestions px-4 lg:px-20 py-6">
        <div class="space-y-2">
            <h1 class="text-3xl text-rose-500">
                Recommended
            </h1>
            <span class="text-sm">Based on your recent purchase.</span>
        </div>

        <div class="swiper swiper-product-suggestions w-full h-60">
            <div class="swiper-wrapper text-slate-800">
                {#each recommendedProducts as product, index}
                    <div class="swiper-slide">
                        <div class="w-full h-full flex flex-col items-center justify-center">
                            <img src="{base}/item-0{index + 1}.png" alt={product}>
                            <span>{product}</span>
                        </div>
                    </div>
                {/each}
            </div>

            <!-- <div class="swiper-pagination"></div> -->

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </section>

    <section class="offers bg-white px-4 lg:px-20 py-6">
        <div class="space-y-2">
            <h1 class="text-3xl text-rose-500">
                Big Season Sale
            </h1>
            <span class="text-sm">Don't miss out on these huge discount offers.</span>
        </div>

        <div class="swiper swiper-offers w-full h-80 md:h-72">
            <div class="swiper-wrapper text-slate-800">
                {#each Array.from(Array(3).keys()) as offer, index}
                    <div class="swiper-slide">
                        <div class="w-full h-full flex flex-col items-center justify-center">
                            <img src="{base}/offer-0{index + 1}.png" alt="offer {index + 1}">
                        </div>
                    </div>
                {/each}
            </div>

            <div class="swiper-pagination"></div>
        </div>
    </section>

    <!-- <section class="call-to-action px-4 lg:px-20 py-6">
        <img src="{base}/call-to-action.png" alt="Call to action">
    </section> -->

    <section class="call-to-action px-4 lg:px-20 py-6">
        <div class="flex items-center h-64 bg-[#ffdd7f] rounded-lg overflow-hidden px-20">
            <div class="space-y-6">
                <div class="space-y-2">
                    <h1 class="text-5xl font-bold tracking-wide">Grocery</h1>
                    <p class="text-xl">Delivered directly to your door!</p>
                </div>

                <a href="{base}#shop-now" class="max-w-fit flex items-center gap-2 text-2xl text-rose-500 uppercase outline-none hover:gap-4 focus:gap-4 transition-all">
                    <span>Shop now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                </a>
            </div>
            <div class="grow h-full bg-[url('/call-to-action-cropped.png')] bg-[right_bottom] bg-contain bg-no-repeat"></div>
        </div>
    </section>

    <section class="product-category">

    </section>
</main>

<footer class="grid grid-cols-1 lg:grid-cols-5 gap-8 bg-white px-4 lg:px-20 py-20">
    <a href="{base}/" class="h-full logo flex flex-col items-center gap-2 self-center">
        <img src="{base}/logo-lg.png" alt="Grocer Daily logo" width="70" height="70" />

        <h1 class="text-2xl text-rose-500 uppercase">
            MMD
        </h1>
    </a>
    
    <div class="space-y-4">
        <h2 class="text-2xl font-bold">All Categories</h2>
        <ul class="flex flex-wrap lg:block gap-4 lg:space-y-2">
            <li><a href="{base}#grocery">Grocery</a></li>
            <li><a href="{base}#garment">Garment</a></li>
            <li><a href="{base}#food">Food</a></li>
        </ul>
    </div>

    <div class="space-y-4">
        <h2 class="text-2xl font-bold">Account</h2>
        <ul class="flex flex-wrap lg:block gap-4 lg:space-y-2">
            <li><a href="{base}#my-account">My Account</a></li>
            <li><a href="{base}#order-history">Order History</a></li>
            <li><a href="{base}#wishlist">Wishlist</a></li>
            <li><a href="{base}#payment">Payment</a></li>
            <li><a href="{base}#address">Address</a></li>
        </ul>
    </div>

    <div class="space-y-4">
        <h2 class="text-2xl font-bold">Help and Support</h2>
        <ul class="flex flex-wrap lg:block gap-4 lg:space-y-2">
            <li><a href="{base}#grocery">FAQs</a></li>
            <li><a href="{base}#garment">Terms and Condition</a></li>
            <li><a href="{base}#food">Privacy Policy</a></li>
            <li><a href="{base}#food">Delivery Policy</a></li>
        </ul>
    </div>

    <div class="space-y-4">
        <h2 class="text-2xl font-bold">Contact Us</h2>
        <ul class="flex flex-wrap lg:block gap-4 lg:space-y-2">
            <li class="flex items-center gap-2">
                <svg class="w-6 h-6 text-[#25D366]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <span>Whatsapp: 1234567890</span>
            </li>
            <li class="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-rose-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span>Hotline: 1234567890</span>
            </li>
        </ul>
        <div class="flex items-center justify-evenly lg:justify-start gap-4">
            <svg class="w-6 h-6 text-[#E4405F]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path fill="currentColor" d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
            <svg class="w-6 h-6 text-[#1877F2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path fill="currentColor" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            <svg class="w-6 h-6 text-[#1DA1F2]" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </div>
    </div>
</footer>

<style>
    :global(body) {
        font-family: 'Comfortaa';
    }
    :root {
        --swiper-theme-color: rgb(244 63 94);
    }
    :global(.swiper-offers .swiper-slide > div > img) {
        scale: 0.9;
        transition: scale 400ms ease-in-out;
    }

    :global(.swiper-offers .swiper-slide.swiper-slide-active > div > img) {
        scale: 1;
        transition: scale 400ms ease-in-out;
    }
</style>