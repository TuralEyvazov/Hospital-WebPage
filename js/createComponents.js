const indexSliders = document.querySelector("#index-sliders .sliders");
const sectionServices = document.querySelector('.section-services .cards')
const ourDoctors = document.querySelector('.our-doctors .cards')
const testimonialSliders = document.querySelector('.testimonials .testimonials-slider .sliders')
const pricingContent = document.querySelector('#pricing .pricing-cards')
const doctorsCards = document.querySelector('.section-doctors .row')
const doctorDetailsCards = document.querySelector('#doctor-details')




export class CreateComponents {
    static createMainSlider = (dbIndexSliders) => {
        let currentSlide = 0;
        let html = ''
        function createSlider(currentSlide) {
            html = `
            <div class="slider mr-10 w-100 h-vh-90 family-secondary">
                <div class="container">
                    <div class="row">
                        <div class="h-vh-90 d-flex item-center">
                            <div class="slider-text">
                                <span class="fs-18 fw-600 text-primary">${dbIndexSliders[currentSlide].title}</span>
                                <h2 class="fs-50 mt-10 fw-800">${dbIndexSliders[currentSlide].description}</h2>
                                <p class="my-30 fw-600">${dbIndexSliders[currentSlide].paragraf}</p>
                                <div class="slider-link-btn">
                                    <a href="${dbIndexSliders[currentSlide].link_url_1}" class="bg-primary transition mr-8 text-white py-10 px-28 rounded-4">Haqqımızda</a>
                                    <a href="${dbIndexSliders[currentSlide].link_url_2}" class="bg-white transition text-black py-10 px-28 rounded-4">Xidmətlər</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `
            indexSliders.innerHTML = html
            const slider = document.querySelector(".slider");
            slider.style.backgroundImage = `url(${dbIndexSliders[currentSlide].image_url})`
        }

        createSlider(currentSlide)

        const leftBtn = document.querySelector("#index-sliders .navigate .left");
        const rightBtn = document.querySelector("#index-sliders .navigate .right");


        leftBtn.addEventListener("click", () => {
            currentSlide = currentSlide - 1;
            if (currentSlide < 0) {
                currentSlide = dbIndexSliders.length - 1;
            }
            setTimeout(() => {
                createSlider(currentSlide)
            }, 500)
        })

        rightBtn.addEventListener("click", () => {
            currentSlide = currentSlide + 1;
            if (currentSlide > dbIndexSliders.length - 1) {
                currentSlide = 0;
            }
            setTimeout(() => {
                createSlider(currentSlide)
            }, 500)
        })
    }

    static createOurDoctorCards = (dbDoctorsDetails) => {
        let html = ''
        dbDoctorsDetails.slice(0, 4).forEach((doctor) => {
            html += `
            <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 card">
                    <div class="doctor-card">
                        <div class="card-img">
                            <img src=${doctor.image} alt="">
                        </div>
                        <div class="doctor-social">
                            <a href="">
                                <i class="${doctor.social[0].icon}"></i>
                            </a>
                            <a href="">
                                <i class="${doctor.social[1].icon}"></i>
                            </a>
                            <a href="">
                                <i class="${doctor.social[2].icon}"></i>
                            </a>
                            <a href="">
                                <i class="${doctor.social[3].icon}"></i>
                            </a>
                        </div>
                        <div class="doctor-card-title">
                            <a href="../../pages/doctor-details.html?id=${doctor.id}">
                                <h5>${doctor.name}</h5>
                                <span>${doctor.about.details[0].title}</span>
                            </a>
                        </div>
                    </div>
                </div>
            `
        })
        ourDoctors.innerHTML = html
    }

    static createPrising = (dbPricing) => {
        let html = ''
        dbPricing.forEach(item => {
            html += `
            <div class="card col-lg-3 col-md-6 col-sm-12 col-xs-12">
               <div class="pricing-card">
                  <div class="price">
                     <span>
                        <b>${item.amount}</b>
                        <small>${item.rate}</small>
                     </span>
                     <p>${item.plan}</p>
                  </div>
                  <h5>${item.department}</h5>
                  <ul>
                     <li>
                        <i class="fa-regular fa-check"></i>
                        <span>${item.features[0]}</span>
                     </li>
                     <li>
                        <i class="fa-regular fa-check"></i>
                        <span>${item.features[1]}</span>
                     </li>
                     <li>
                        <i class="fa-regular fa-check"></i>
                        <span>${item.features[2]}</span>
                     </li>
                     <li>
                        <i class="fa-regular fa-check"></i>
                        <span>${item.features[3]}</span>
                     </li>
                  </ul>
                  <a href="">Qəbul edin</a>
               </div>
            </div>
            `
        })
        pricingContent.innerHTML = html
    }

    static createDoctorCards = (dbDoctors) => {
        let html = '';
        dbDoctors.forEach(doctor => {
            html += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 cards">
                        <div class="card">
                            <div class="doctor-social">
                                <a href="${doctor.social[0].link}" target="_blank">
                                    <i class="${doctor.social[0].icon}"></i>
                                </a>
                                <a href="${doctor.social[1].link}" target="_blank">
                                    <i class="${doctor.social[1].icon}"></i>
                                </a>
                                <a href="${doctor.social[2].link}" target="_blank">
                                    <i class="${doctor.social[2].icon}"></i>
                                </a>
                                <a href="${doctor.social[3].link}" target="_blank">
                                    <i class="${doctor.social[3].icon}"></i>
                                </a>
                             </div>
                            <div class="card-img">
                                <img src="${doctor.image}" alt="">
                            </div>
                            <div class="card-title">
                                <h5>
                                    <a href="../../pages/doctor-details.html?id=1">${doctor.name}</a>
                                </h5>
                                <span>${doctor.speciality}</span>
                            </div>
                        </div>
                    </div>
            `
        })

        doctorsCards.innerHTML = html;

        const tableTd = document.querySelectorAll('#timetable table tbody td')
        tableTd.forEach(item => {
            if (item.textContent !== '' && item.className !== 'time') {
                item.style.backgroundColor = '#f5f5f5'
            }
        })
    }

    static createForAboutDoctorCards = (dbDoctors) => {
        let html = '';
        dbDoctors.slice(0, 3).forEach(doctor => {
            html += `
                <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 cards">
                        <div class="card">
                            <div class="doctor-social">
                                <a href="${doctor.social[0].link}" target="_blank">
                                    <i class="${doctor.social[0].icon}"></i>
                                </a>
                                <a href="${doctor.social[1].link}" target="_blank">
                                    <i class="${doctor.social[1].icon}"></i>
                                </a>
                                <a href="${doctor.social[2].link}" target="_blank">
                                    <i class="${doctor.social[2].icon}"></i>
                                </a>
                                <a href="${doctor.social[3].link}" target="_blank">
                                    <i class="${doctor.social[3].icon}"></i>
                                </a>
                             </div>
                            <div class="card-img">
                                <img src="${doctor.image}" alt="">
                            </div>
                            <div class="card-title">
                                <h5>
                                    <a href="../../pages/doctor-details.html?id=1">${doctor.name}</a>
                                </h5>
                                <span>${doctor.speciality}</span>
                            </div>
                        </div>
                    </div>
            `
        })

        doctorsCards.innerHTML = html;
    }

    static createServicesCard = (dbServices) => {
        let html = ''
        dbServices.forEach(service => {
            html += `
            <div class="col-lg-4 col-md-6 col-sm-12 card">
                    <div class="box">
                        <span><i class="${service.icon}"></i></span>
                        <h5 class="py-14">${service.name}</h5>
                        <p>${service.description}</p>
                    </div>
                </div>
            `
        })
        sectionServices.innerHTML = html
    }

    static sliderTestimonials = (dbTestimonials) => {
        let html = ''
        dbTestimonials.forEach(item => {
            html += `
            <div class="slider">
                <div class="slider-img">
                    <img src="${item.image}" alt="">
                    <span><i class="fa-solid fa-quote-left"></i></span>
                </div>
                <div class="slider-text">
                    <h5>${item.author}</h5>
                    <span>${item.title}</span>
                    <p>${item.quote}</p>
                </div>
            </div>
            `
        })
        testimonialSliders.innerHTML = html

        const sliderContainer = document.querySelector('.testimonials .slider-container')
        const sliderContent = document.querySelector('.testimonials .slider-content')
        const slider = document.querySelectorAll('.testimonials  .slider')
        const sliders = document.querySelector('.testimonials .sliders')
        const prevBtn = document.querySelector('.testimonials .navigate .prev')
        const nextBtn = document.querySelector('.testimonials .navigate .next')


        slider.forEach(item => {
            item.style.width = `${Math.floor(sliderContainer.clientWidth)}px`
        })
        window.onscroll = () => {
            slider.forEach(item => {
                item.style.width = `${Math.floor(sliderContainer.clientWidth)}px`
            })
        }


        let totalSlides = dbTestimonials.length - 1
        let num = 0

        prevBtn.onclick = () => {
            num <= 0 ? num = 0 : num--
            sliders.style.transform = `translateX(-${num * sliderContainer.clientWidth}px)`;
        }

        nextBtn.onclick = () => {
            totalSlides <= num ? num = 0 : num++
            sliders.style.transform = `translateX(-${num * sliderContainer.clientWidth}px)`;
        }

        let intervalId;

        function startSlider() {
            intervalId = setInterval(() => {
                totalSlides <= num ? num = 0 : num++;
                sliders.style.transform = `translateX(-${num * sliderContainer.clientWidth}px)`;
            }, 3000);
        }

        startSlider();

        sliderContent.onmousemove = () => {
            clearInterval(intervalId);
        };

        sliderContent.onmouseleave = () => {
            startSlider();
        };
    }

    static createTimeTable = () => {
        const td = document.querySelectorAll('#timetable table td')

        td.forEach(item => {
            if (item.textContent !== '') {
                item.style.backgroundColor = 'red !important'
            }
        })
    }

    static createDoctordetails = (dbDoctorsDetails) => {
        const url = new URLSearchParams(window.location.search);
        const doctorId = url.get('id');
        const doctorData = dbDoctorsDetails.find(doctor => doctor.id === +doctorId)
        let html = `
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 d-flex justify-center p-30 flex-column">
                        <div class="details-image bg-white overflow-h">
                            <div class="doctor-social">
                                <a href="${doctorData.social[0].link}" target="_blank">
                                    <i class="${doctorData.social[0].icon}"></i>
                                </a>
                                <a href="${doctorData.social[1].link}" target="_blank">
                                    <i class="${doctorData.social[1].icon}"></i>
                                </a>
                                <a href="${doctorData.social[2].link}" target="_blank">
                                    <i class="${doctorData.social[2].icon}"></i>
                                </a>
                                <a href="${doctorData.social[3].link}" target="_blank">
                                    <i class="${doctorData.social[3].icon}"></i>
                                </a>
                             </div>
                            <div class="figure overflow-h">
                                <img src="${doctorData.image}" alt="">
                            </div>
                        </div>
                        <div class="timing bg-white hidden-lg mt-40 p-40">
                            <div class="section-head item-start relative mb-40">
                                <!--                        section-head classi mixin.scss falyda class olaraq verilib ve her defe eyni istifade olugu ucun-->
                                <span>Zamanlama</span>
                                <h4>İstifadə qabiliyyəti</h4>
                                <i class="fa-light fa-wave-pulse"></i>
                            </div>
                            <p class="text-dark-grey">Suspendisse potenti. Maecenas dapibus ac tellus sed pulvinar. Vestibulum bib volutpat
                                accumsan non laoreet nulla luctus.</p>
                            <ul class="text-dark-grey">
                                <li>
                                    <span>Monday - Friday</span>
                                    <span>08:00 - 20:00</span>
                                </li>
                                <li>
                                    <span>Saturday</span>
                                    <span>09:00 - 18:00</span>
                                </li>
                                <li>
                                    <span>Sunday</span>
                                    <span>09:00 - 18:00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-8 p-30">
                        <div class="details-box">
                            <h3 class="fs-32 family-secondary">${doctorData.name}</h3>
                            <span class="py-14 d-flex fs-18 text-primary fw-500">${doctorData.title}</span>
                            <p class="my-30 text-dark-grey">${doctorData.about.bio}</p>
                            <ul>
                                <li>
                                    <h6>İxtisas</h6>
                                    <p>Endokrinologiya Uşaq Təbabəti Urologiya</p>
                                </li>
                                <li>
                                    <h6>Təhsil</h6>
                                    <p>Tibb elmləri doktoru, Texas Universiteti, ABŞ (1990) Tibbi Orientasiya Proqramı, Sent-Luis Universiteti (Sent-Luis, Missuri 1996)</p>
                                </li>
                                <li>
                                    <h6>Təcrübə</h6>
                                    <p>
                                        Tibb üzrə 25 illik Təcrübə Vitse-prezidenti və Baş Tibb Mütəxəssisi, Kessler Reabilitasiya Tibb Korporasiyası İnstitutu Professor, Sahil Şəxsi Xəstəxana Kampusu İnstitutu
                                    </p>
                                </li>
                                <li>
                                    <h6>Ünvan</h6>
                                    <p>Suite 27, Tibb Mərkəzi, Sunshine Coast Özəl Xəstəxanası, QLD 4556</p>
                                </li>
                                <li>
                                    <h6>Zamanlama</h6>
                                    <p>
                                        Monday - Friday 08:00 - 20:00 <br/>
                                        Saturday 09:00 - 18:00 <br/>
                                        Sunday 09:00 - 18:00
                                    </p>
                                </li>
                                <li>
                                    <h6>Phone</h6>
                                    <p>
                                        +1-23-345-6789</p>
                                </li>
                                <li>
                                    <h6>Email</h6>
                                    <p>myemail@yourdomain.com
    
                                    </p>
                                </li>
                                <li>
                                    <h6>Website</h6>
                                    <p>
                                        www.yourdomain.com</p>
                                </li>
                            </ul>
                        </div>
                        <div class="appointment mt-20">
                            <div class="section-head item-start relative mb-40">
    
                                <!--section-head classi mixin.scss falyda class olaraq verilib ve her defe eyni istifade olugu ucun-->
    
                                <span>Onlayn görüş</span>
                                <h4>Görüş təyin edin</h4>
                                <i class="fa-light fa-wave-pulse"></i>
                            </div>
                            <form>
                                <div class="input-name">
                                    <div class="name">
                                        <input type="text" name="name" placeholder="Adınız">
                                    </div>
                                    <div class="phone">
                                        <input type="number" name="phone" id="phone" placeholder="Telefon">
                                    </div>
                                </div>
                                <div class="email">
                                    <input type="email" name="email" id="email" placeholder="Email">
                                </div>
                                <div class="message">
                                    <textarea name="message" id="message" placeholder="Pasient haqqında bizə məlumat verin"></textarea>
                                </div>
                                <button>Sorğu göndərin</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    
        `
        doctorDetailsCards.innerHTML = html
    }
}