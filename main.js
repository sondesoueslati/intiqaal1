

(function () {
    "use strict";

    // The active locale
    const FALLBACK_LOCAL = "en";

    const locale = localStorage.getItem('locale') ? localStorage.getItem('locale') : FALLBACK_LOCAL;
    const langSwitch = document.querySelector('#lang');
    langSwitch.innerHTML = locale == "en" ? "<span id='flag' class='fi fi-sa'></span> AR" : "<span id='flag' class='fi fi-us'></span> EN";
    const translations = {
        // English translations
        "en": {

            "home": "Home",
            "about": "About Us",
            "about-content": `
            Located in Saudi Arabia, INTIQAAL is a tech company speciallized in cloud services. Working alongside with our partners, we provide high quality devops, devsecops and cloud services. Among our activities : Assessment & Discovery Consulting, Team-as-a-Service, Cloud Professional Services, Managed DevOps/DevSecOps Services, Training and Certification
            `,
            'cta-btn': 'Let\'s discuss your next project',
            "mission": "Mission",
            "mission-content": `
            At Intiqaal   we aim at accelerating the progress of digital transformation within the government and private sector (2030 Vision of KSA) as well as providing digital transformation solutions and the best practices to achieve 2030 vision. Since the creation, Intiqaal has focused on developing the digital transformation capabilities across the Kingdom by providing the high skilled engineers in continuous integration and continuous delivery and reducing the time to Go-To-Market (GTM) plan for government and privates sectors.
            `,
            "guidelines": "Guidelines",
            "community": "Community",
            'activities': "Activities",
            "devops-act": "DevOps Services",
            "devops-act-item1": "‣ Providing certified DevOps Engineers",
            "devops-act-item2": "‣ Taking care of the CI/CD pipelines & deployment",
            "devops-act-item3": "‣ Working with security and privacy complies with Kingdom security best practices",
            "devops-act-item4": "‣ Implement monitoring practices, and  troubleshooting",
            "training-act": "Training and Certification",
            "training-act-item1": "‣ Provide cloud and DevOps training ",
            "training-act-item2": "‣ Partnership with cloud leaders",
            "training-act-item3": "‣ Provide a customized Cloud and DevOps courses",
            "training-act-item4": "‣ Be the leader in KSA market regarding Cloud and DevOps trainings",
            "cloud-act": "Cloud Professional Services",
            "cloud-act-item1": "‣ Google Professional Cloud Services",
            "cloud-act-item2": "‣ Multi-cloud, configuration, DevOps and Security consultation services",
            "cloud-act-item3": "‣ Service Level Agreement",
            "cloud-act-item4": "‣ Support the other organization within the group  to offer application as services",
            "teams-act": "Team-as-a-Service",
            "teams-act-item1": "‣ Offer highly and skilled engineers with good experience",
            "teams-act-item2": "‣ Different profiles available :IT Architects , DevOps Engineers , Software & Infrastructure Engineers",
            "teams-act-item3": "‣ Take over the leadership role to help Organization to move forward",
            "act-content": "At Intiqaal we provide our customers with a variety of services in different sectors to ensure the quality of work and the continuos support",
            "partners": "Experts",
            "contact": "Contact Us",
            "cta-heading": "Welcome to INTIQAAL",
            "cta-text": "Your partner to digital transformation",
            "we-analyze": "WE DO ANALYZE",
            "we-design": "WE DO DESIGN",
            "we-provide": "WE DO PROVIDE",
            "we-analyze-content": "We understand your needs.",
            "we-design-content": "We create the most appropriate and cost- effective solution with engineering.",
            "we-provide-content": "We deliver and execute  the turnkey solution.",
            "send-msg": "Send A Message",
            "send": "Send",
            "name": "Your Name",
            "email": "Your Email",
            "subject": "Subject",
            "message": "Message",

        },
        // Arabic translations
        "ar": {
            "home": "الرئيسية",
            "about": "من نحن",
            "about-content": `
             .إننقال هي شركة تقنية تقع في المملكة العربية السعودية متخصصة في الخدمات السحابية. من خلال العمل جنبًا إلى جنب مع شركائنا، نقدم خدمات سحابية عالية الجودة. من بين أنشطتنا : استشارات التقييم والاكتشاف ,فريق كخدمة, خدمات سحابية محترفة, خدمات ديفوبس منظمة , تدريبات وشهائد`,
            "mission": "هدفنا",
            'cta-btn': 'فلنناقش مشروعك القادم',
            "mission-content": ` في إنتقال ، نهدف إلى تسريع تقدم التحول الرقمي في القطاعين الحكومي والخاص (رؤية المملكة العربية السعودية 2030) بالإضافة إلى توفير حلول التحول الرقمي وأفضل الممارسات لتحقيق رؤية 2030. منذ إنشائها ، ركزت إنتقال على بناء كفائات التحول الرقمي
            في المملكة من خلال توفير مهندسين ذوي مهارات عالية`,
            "guidelines": "قواعدنا",
            "community": "المجتمع",
            "activities": "أنشطة",
            "devops-act": "DevOps خدمات",
            "devops-act-item1": "DevOps        •توفير مهندسين معتمدين في ",
            "devops-act-item2": "CI/CD الاهتمام بخطط ",
            "devops-act-item3": "العمل بأمان وخصوصية يتوافق مع أفضل ممارسات أمان المملكة",
            "devops-act-item4": "تنفيذ ممارسات المراقبة ، واستكشاف الأخطاء وإصلاحها",
            "training-act": "التدريب والشهادة",
            "training-act-item1": "DevOpsتوفير تدريبات في التقنيات السحابية و ",
            "training-act-item2": "شراكة مع عمالقة التقنيات السحابية",
            "training-act-item3": "توفير دورات متخصصة في التقنيات السحابية",
            "training-act-item4": "أن نصبح الرائد في سوق المملكة العربية السعودية فيما يتعلق بالتدريبات على التكنولوجيا السحابية ",
            "cloud-act": "خدمات سحابة احترافية",
            "cloud-act-item1": "Google خدمات سحابية احترافية من",
            "cloud-act-item2": "متعدد السحابة , اعدادات, خدمات استشارية",
            "cloud-act-item3": "اتفاقية مستوى الخدمة",
            "cloud-act-item4": "دعم المنظمات الأخرى داخل المجموعة لتقديم التطبيقات كخدمات",
            "teams-act": "فريق كخدمة",
            "teams-act-item1": "تقديم مهندسين ذوي مهارات عالية وخبرة جيدة",
            "teams-act-item2": " عدة كفائات : مهندسو معلوماتية, مهندسو بنية تحتية و مهندسو تقنيات سحابية",
            "teams-act-item3": "تولي الدور القيادي لمساعدة المنظمة على المضي قدمًا",
            "act-content": "في انتقال نقدم لعملائنا مجموعة متنوعة من الخدمات في مختلف القطاعات لضمان جودة العمل والدعم المستمر",
            "partners": "خبرات",
            "contact": "تواصل معنا",
            "cta-heading": "مرحبا بك في إنتقال",
            "cta-text": "رفيقك نحو التحول الرقمي",
            "we-analyze": "نقوم بالتحليل",
            "we-design": "نقوم بالتصميم",
            "we-provide": "نقوم بالتوفير",
            "we-analyze-content": "نحن نتفهم احتياجاتك",
            "we-design-content": "نحن نخلق الحل الأنسب والأكثر فعالية من حيث التكلفة مع الهندسة",
            "we-provide-content": "نحن نقدم وننفذ الحل الجاهز",
            "send-msg": "راسلنا من هنا",
            "send": "إرسال",
            "name": "الاسم",
            "email": "البريد الالكتروني",
            "subject": "الموضوع",
            "message": "الرسالة",

        },
    };
    let elements = ['p', 'section', '#navbar ul li:not(.exception) a', 'h2:not(#welcome, .section-heading, .section-title h2)', 'span:not(#lang,.activities-items .act-item span, #flag, footer span)']
    // When the page content is ready...
    document.addEventListener("DOMContentLoaded", () => {


        let hijri = new Intl.DateTimeFormat('en-SA-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
        let miladi = new Intl.DateTimeFormat('en-SA-u-ca', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now());
        let hijriAr = new Intl.DateTimeFormat('ar-SA-u-ca-islamic', { day: 'numeric', month: 'long', weekday: 'long', year: 'numeric' }).format(Date.now());
        let miladiAr = new Intl.DateTimeFormat('ar-TN-u-ca', { day: 'numeric', month: 'long', year: 'numeric' }).format(Date.now());

        document.querySelector('#dynamic-date').innerText = localStorage.getItem('locale') === 'en' ? `${hijri} / ${miladi}` : `${hijriAr} / ${miladiAr}`
        // document.querySelector('#dynamic-date').style.fontWeight = localStorage.getItem('locale') == 'ar' ? 600 : 600


        document
            // Find all elements that have the key attribute
            .querySelectorAll("[data-i18n-key]")
            .forEach(translateElement);

        document.getElementById('message').innerText = '';

        if (localStorage.getItem('locale') === 'ar') {
            document.querySelector('.navbar ul').style.flexDirection = "row-reverse";
            document.querySelector('.navbar ul').style.marginLeft = 0;
            document.querySelector('#dark').style.marginRight = "5rem";
            document.querySelector('#up-header img').style.marginRight = "1rem";
            document.querySelector('#up-header img').style.marginLeft = "1rem   ";
            document.querySelector('#up-header').style.flexDirection = "row-reverse";
            document.querySelector('#nav-wrapper').style.flexDirection = "row-reverse";
            document.querySelector('#nav-wrapper').style.justifyContent = "space-between";
            // document.querySelector('.activities-items .act-item ul li').style.listStyle = "none"
            Array.prototype.forEach.call(document.querySelectorAll('.activities-items .act-item ul li'), el => {

                el.style.textAlign = "right"
            })

            elements.forEach(el => {
                Array.prototype.forEach.call(document.querySelectorAll(el), tag => {
                    // console.log(el);
                    if (el == "#navbar ul li:not(.exception) a") {
                        tag.style.fontSize = "1rem";
                        tag.style.fontFamily = "var(--text-Regular)";
                    }
                    else if (tag.id == "welcomep") {
                        tag.style.fontSize = "28px"
                        tag.style.fontFamily = "var(--text-medium)"
                    }
                    else if (tag.id == 'send-us-msg') {
                        tag.style.fontSize = "36px"
                        tag.style.fontFamily = "var(--text-medium)"
                    }

                    else {
                        tag.style.fontSize = "1.2rem";

                        tag.style.lineHeight = "2rem"
                        tag.style.fontFamily = "var(--text-regular)";
                    }

                })
            })
        }
    });

    for (let input of ['name', 'email', 'subject', 'message']) {
        document.querySelector(`#${input}`).style.textAlign = localStorage.getItem('locale') == "ar"
            ? "right"
            : "left"
        document.querySelector(`#${input}`).placeholder = localStorage.getItem('locale') == "ar"
            ? translations['ar'][input]
            : document.querySelector(`#${input}`).placeholder
    }
    function translateElement(element) {
        const key = element.getAttribute("data-i18n-key");
        const translation = translations[locale][key];
        element.innerText = translation;
    }


    langSwitch.parentElement.addEventListener('click', (e) => {
        console.log(e.target.innerText);
        localStorage.setItem('locale', langSwitch.innerText.includes("EN") ? "en" : "ar");

        langSwitch.innerHTML = localStorage.getItem('locale') == "en" ? "<span id='flag' class='fi fi-sa'></span> AR" : "<span id='flag' class='fi fi-us'></span> EN";
        window.location.reload();
    })
    Array.prototype.forEach.call(document.querySelectorAll('section p'), child => {
        if (localStorage.getItem('locale') === 'ar') {
            child.style.textAlign = 'right'
        } else {
            child.style.textAlign = 'left'
        }
    })
    Array.prototype.forEach.call(document.querySelectorAll('.why-us .icon-box'), el => {
        if (localStorage.getItem('locale') === 'ar') {
            el.style.textAlign = "right";
            el.style.justifyContent = "space-between";
        }
    })

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }




    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        if (!header.classList.contains('header-scrolled')) {
            offset -= 20
        }

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Back to top button
     */
    // let backtotop = select('.back-to-top')
    // if (backtotop) {
    //     const toggleBacktotop = () => {
    //         if (window.scrollY > 100) {
    //             backtotop.classList.add('active')
    //         } else {
    //             backtotop.classList.remove('active')
    //         }
    //     }
    //     window.addEventListener('load', toggleBacktotop)
    //     onscroll(document, toggleBacktotop)
    // }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function (e) {
        select('#navbar').classList.toggle('navbar-mobile')

        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Mobile nav dropdowns activate
     */
    on('click', '.navbar .dropdown > a', function (e) {
        if (select('#navbar').classList.contains('navbar-mobile')) {
            e.preventDefault()
            this.nextElementSibling.classList.toggle('dropdown-active')
        }
    }, true)

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function (e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Skills animation
     */
    // let skilsContent = select('.skills-content');
    // if (skilsContent) {
    //     new Waypoint({
    //         element: skilsContent,
    //         offset: '80%',
    //         handler: function (direction) {
    //             let progress = select('.progress .progress-bar', true);
    //             progress.forEach((el) => {
    //                 el.style.width = el.getAttribute('aria-valuenow') + '%'
    //             });
    //         }
    //     })
    // }

    /**
     * Testimonials slider
     */
    // new Swiper('.testimonials-carousel', {
    //     speed: 400,
    //     loop: true,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });

    /**
     * Porfolio isotope and filter
     */
    // window.addEventListener('load', () => {
    //     let portfolioContainer = select('.portfolio-container');
    //     if (portfolioContainer) {
    //         let portfolioIsotope = new Isotope(portfolioContainer, {
    //             itemSelector: '.portfolio-wrap',
    //             layoutMode: 'fitRows'
    //         });

    //         let portfolioFilters = select('#portfolio-flters li', true);

    //         on('click', '#portfolio-flters li', function (e) {
    //             e.preventDefault();
    //             portfolioFilters.forEach(function (el) {
    //                 el.classList.remove('filter-active');
    //             });
    //             this.classList.add('filter-active');

    //             portfolioIsotope.arrange({
    //                 filter: this.getAttribute('data-filter')
    //             });
    //             portfolioIsotope.on('arrangeComplete', function () {
    //                 AOS.refresh()
    //             });
    //         }, true);
    //     }

    // });


    /**
     * Initiate portfolio lightbox 
     */
    // const portfolioLightbox = GLightbox({
    //     selector: '.portfolio-lightbox'
    // });

    /**
     * Portfolio details slider
     */
    // new Swiper('.portfolio-details-slider', {
    //     speed: 400,
    //     autoplay: {
    //         delay: 5000,
    //         disableOnInteraction: false
    //     },
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });

    /**
     * Animation on scroll
     */
    // window.addEventListener('load', () => {
    //     AOS.init({
    //         duration: 1000,
    //         easing: "ease-in-out",
    //         once: true,
    //         mirror: false
    //     });
    // });

    /**
     * Initiate Pure Counter 
     */
    // new PureCounter();

    // DOM Elements






})()
