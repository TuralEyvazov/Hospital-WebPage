export const services = [
    {
        id: 1,
        icon: 'fa-thin fa-heart-circle-bolt', //Burdaki classlar fontawesome iconlarının classlarıdır.
        name: 'Sağlamlıq yoxlanışı',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
    {
        id: 2,
        icon: "fa-thin fa-bed-pulse",
        name: 'Əməliyyat Otağı',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
    {
        id: 3,
        icon: "fa-thin fa-hospital",
        name: 'Aptek Dəstəyi',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
    {
        id: 4,
        icon: "fa-thin fa-truck-medical",
        name: 'Təcili yardım maşını',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
    {
        id: 5,
        icon: "fa-thin fa-flask-gear",
        name: 'Lab Testlər',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
    {
        id: 6,
        icon: "fa-thin fa-suitcase-medical",
        name: 'İntensiv Baxım',
        description: 'Biz gedən və gələn xəstələrə geniş tibbi prosedurlar təklif edirik və biz çox qürurlu bir nailiyyət heyətiyik.',
    },
];

export const doctorsDetails = [
    {
        id: 1,
        name: 'Dr. Qurban Eyvazov',
        title: 'MBBS (Sydney), FRACS (Paediatric Surgery)',
        about: {
            bio: 'Qərbi Virciniya Universiteti Tibb Məktəbini bitirdikdən sonra Dr. Emily Haden Akron Uşaq Xəstəxanasında idman tibb üzrə iki illik təqaüd kursunu tamamladı. Dr. Emily Haden Aleks Akronda təhsil aldığı müddətdə Akron Universiteti və Uolş Universitetləri üçün komanda həkimi idi.',
            details: [
                {
                    id: 1,
                    title: 'Speciality',
                    description: [
                        'Paediatric Surgery',
                        'General Surgery',
                        'Laparoscopic Surgery',
                    ],
                },
                {
                    id: 2,
                    title: 'Education',
                    description: [
                        'MBBS - Sydney',
                        'FRACS - Paediatric Surgery',
                    ],
                }
            ]
        },
        image: '../../assets/images/team-1.jpg',
        availability: [
            {
                day: 'Monday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Tuesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Wednesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Thursday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Friday',
                time: '10:00 AM - 5:00 PM',
            },
        ],
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 2,
        name: 'Dr. Nurlana Əsədova',
        title: 'MBBS (Sydney), FRACS (Paediatric Surgery)',
        about: {
            bio: 'Qərbi Virciniya Universiteti Tibb Məktəbini bitirdikdən sonra Dr. Emily Haden Akron Uşaq Xəstəxanasında idman tibb üzrə iki illik təqaüd kursunu tamamladı. Dr. Emily Haden Aleks Akronda təhsil aldığı müddətdə Akron Universiteti və Uolş Universitetləri üçün komanda həkimi idi.',
            details: [
                {
                    id: 1,
                    title: 'Speciality',
                    description: [
                        'Paediatric Surgery',
                        'General Surgery',
                        'Laparoscopic Surgery',
                    ],
                },
                {
                    id: 2,
                    title: 'Education',
                    description: [
                        'MBBS - Sydney',
                        'FRACS - Paediatric Surgery',
                    ],
                }
            ]
        },
        image: '../../assets/images/team-2.jpg',
        availability: [
            {
                day: 'Monday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Tuesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Wednesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Thursday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Friday',
                time: '10:00 AM - 5:00 PM',
            },
        ],
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 3,
        name: 'Dr. Nizami İsmayılov',
        title: 'MBBS (Sydney), FRACS (Paediatric Surgery)',
        about: {
            bio: 'Qərbi Virciniya Universiteti Tibb Məktəbini bitirdikdən sonra Dr. Emily Haden Akron Uşaq Xəstəxanasında idman tibb üzrə iki illik təqaüd kursunu tamamladı. Dr. Emily Haden Aleks Akronda təhsil aldığı müddətdə Akron Universiteti və Uolş Universitetləri üçün komanda həkimi idi.',
            details: [
                {
                    id: 1,
                    title: 'Speciality',
                    description: [
                        'Paediatric Surgery',
                        'General Surgery',
                        'Laparoscopic Surgery',
                    ],
                },
                {
                    id: 2,
                    title: 'Education',
                    description: [
                        'MBBS - Sydney',
                        'FRACS - Paediatric Surgery',
                    ],
                }
            ]
        },
        image: '../../assets/images/team-3.jpg',
        availability: [
            {
                day: 'Monday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Tuesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Wednesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Thursday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Friday',
                time: '10:00 AM - 5:00 PM',
            },
        ],
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 4,
        name: 'Dr. Ülkər Mustafayeva',
        title: 'MBBS (Sydney), FRACS (Paediatric Surgery)',
        about: {
            bio: 'Qərbi Virciniya Universiteti Tibb Məktəbini bitirdikdən sonra Dr. Emily Haden Akron Uşaq Xəstəxanasında idman tibb üzrə iki illik təqaüd kursunu tamamladı. Dr. Emily Haden Aleks Akronda təhsil aldığı müddətdə Akron Universiteti və Uolş Universitetləri üçün komanda həkimi idi.',
            details: [
                {
                    id: 1,
                    title: 'Speciality',
                    description: [
                        'Paediatric Surgery',
                        'General Surgery',
                        'Laparoscopic Surgery',
                    ],
                },
                {
                    id: 2,
                    title: 'Education',
                    description: [
                        'MBBS - Sydney',
                        'FRACS - Paediatric Surgery',
                    ],
                }
            ]
        },
        image: '../../assets/images/team-4.jpg',
        availability: [
            {
                day: 'Monday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Tuesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Wednesday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Thursday',
                time: '10:00 AM - 5:00 PM',
            },
            {
                day: 'Friday',
                time: '10:00 AM - 5:00 PM',
            },
        ],
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
];

export const doctors = [
    {
        id: 1,
        name: 'Dr. Ülkər Mustafayeva',
        speciality: 'Onkoloq',
        image: '../../assets/images/team-5.jpg',
        userId: 1,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 2,
        name: 'Dr. Qurban Eyvazov',
        speciality: 'Terapevt',
        image: '../../assets/images/team-6.jpg',
        userId: 2,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 3,
        name: 'Dr. Nurlana Əsədova',
        speciality: 'Pediatr',
        image: '../../assets/images/team-7.jpg',
        userId: 3,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 4,
        name: 'Dr. Gülşən Əhmədova',
        speciality: 'Terapevt',
        image: '../../assets/images/team-8.jpg',
        userId: 4,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 5,
        name: 'Dr. Nizami İsmayılov',
        speciality: 'Pediatr',
        image: '../../assets/images/team-9.jpg',
        userId: 5,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
    {
        id: 6,
        name: 'Dr. Sevda Əhmədova',
        speciality: 'Terapevt',
        image: '../../assets/images/team-10.jpg',
        userId: 6,
        social: [
            {
                id: 1,
                name: 'Facebook',
                icon: 'fa-brands fa-facebook-f',
                link: 'https://www.facebook.com/',
            },
            {
                id: 2,
                name: 'X',
                icon: 'fa-brands fa-x-twitter',
                link: 'https://www.x.com/',
            },
            {
                id: 3,
                name: 'LinkedIn',
                icon: 'fa-brands fa-linkedin-in',
                link: 'https://www.linkedin.com/',
            },
            {
                id: 4,
                name: 'Instagram',
                icon: 'fa-brands fa-instagram',
                link: 'https://www.instagram.com/',
            }
        ],
    },
]


export const menu = [
    {
        id: 1,
        pages: "",
        submenu: [
            {
                id: 1,
                page: "Home-1",
            },
            {
                id: 1,
                page: "Home-1",
            },
        ],
    },
    {
        id: 2,
        pages: "Services",
        submenu: [
            {
                id: 1,
                page: "Pages-01",
            },
            {
                id: 2,
                page: "Pages-02",
            },
            {
                id: 3,
                page: "Pages-03",
            },
            {
                id: 4,
                page: "Pages-04",
            },
        ],
    },
    {
        id: 3,
        pages: "Doctors",
        submenu: [
            {
                id: 1,
                page: "Doctors-01",
            },
            {
                id: 2,
                page: "Doctors-02",
            },
        ],
    },
    {
        id: 4,
        pages: "Departments",
        submenu: [],
    },
    {
        id: 5,
        pages: "Blog",
        submenu: [],
    },
    {
        id: 7,
        pages: "Contact",
        submenu: [],
    },
];


export const indexSliders = [
    {
        id: 1,
        image_url: "./assets/images/1.jpg",
        title: "Tibbi Yardım Mərkəzimizə xoş gəlmisiniz",
        description: "Biz pasientlərimizin sağlamlığının qayğısına qalırıq",
        paragraf: 'Başa düşdüm ki, bir həkim olaraq yalnız kiçik bir cəmiyyətə kömək edə bilərəm. Amma bir həkim kimi bütün ölkəmə kömək edə bilərəm.',
        link_url_1: "./pages/about.html",
        link_url_2: "./pages/services.html",
        order: 1
    },
    {
        id: 2,
        image_url: "./assets/images/2.jpg",
        title: "Tibbi Yardım Mərkəzimizə xoş gəlmisiniz",
        description: "Biz pasientlərimizin sağlamlığının qayğısına qalırıq",
        paragraf: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ',
        link_url_1: "./pages/about.html",
        link_url_2: "./pages/services.html",
        order: 2
    },
]   

export const testimonials = [

    {
        author: "John Doe",
        title: "CEO",
        quote: "Tibb Mərkəzi bütün tibbi ehtiyaclarınızı almaq üçün əla yerdir. Yoxlanmağa gəldim və görünməmişdən əvvəl 5 dəqiqədən çox gözləmədim. Mən yalnız daha ciddi məsələlər üçün aldığınız xidmət növünü təsəvvür edə bilərəm. Təşəkkürlər!!",
        date: "2023-01-01",
        image: "../../assets/images/testi-thumb-1.jpg"
    },
    {
        author: "Jane Smith",
        title: "Designer",
        quote: "Tibb Mərkəzi bütün tibbi ehtiyaclarınızı almaq üçün əla yerdir. Yoxlanmağa gəldim və görünməmişdən əvvəl 5 dəqiqədən çox gözləmədim. Mən yalnız daha ciddi məsələlər üçün aldığınız xidmət növünü təsəvvür edə bilərəm. Təşəkkürlər!!",
        date: "2023-02-15",
        image: "../../assets/images/testi-thumb-2.jpg"
    },
    {
        author: "Alex Brown",
        title: "Developer",
        quote: "Tibb Mərkəzi bütün tibbi ehtiyaclarınızı almaq üçün əla yerdir. Yoxlanmağa gəldim və görünməmişdən əvvəl 5 dəqiqədən çox gözləmədim. Mən yalnız daha ciddi məsələlər üçün aldığınız xidmət növünü təsəvvür edə bilərəm. Təşəkkürlər!!",
        date: "2023-03-10",
        image: "../../assets/images/testi-thumb-3.jpg"
    }
];

export const pricing = [
    {
        id: 1,
        amount: 299,
        department: 'Cardiologiya',
        features: ['Funksional diaqnostika', 'Allergen Dərmanlar', 'Polen allergenləri', 'Qida Allergenləri'],
        rate: 'AZN',
        plan: 'Aylıq'
    },
    {
        id: 2,
        amount: 120,
        department: 'Diş Baxımı',
        features: ['Diş implantasiyası', 'Lase Stomatologiya', 'Testlər və Müalicə', 'Tibbi konsultasiya'],
        rate: 'AZN',
        plan: 'Aylıq'
    },
    {
        id: 3,
        amount: 150,
        department: 'Checkup Müayinə',
        features: ['Testlər və Müalicə', 'Testlər və Müalicə', 'Laboratoriya xidmətləri', 'Qida Allergenləri'],
        rate: 'AZN',
        plan: 'Aylıq'
    },
    {
        id: 4,
        amount: 100,
        department: 'Qan Testi',
        features: ['Qan Testi Xidməti', 'Təhlükəsizlik Məsləhətləri', 'Testlər və Müalicə', 'Qida Allergenləri'],
        rate: 'AZN',
        plan: 'Aylıq'
    }
]

export const blogs = [
    {
        id: 1,
        title: 'What is The Success rate of a root canel?',
        description: '',
        date: 'Mart 01,2025',
    }
]