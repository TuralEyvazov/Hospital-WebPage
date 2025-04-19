### **Texniki Tapşırıq**  
#### **Layihə Adı:**  
Xəstəxana Veb Saytı  

#### **Layihənin Ümumi Məqsədi:**  
Bu layihə, xəstəxana üçün müasir, responsiv və funksional veb saytın hazırlanmasını əhatə edir. Layihənin dizaynı [**Medicoz - Clinic & Hospital HTML Template**](https://preview.themeforest.net/item/medicoz-clinic-hospital-html-template/full_screen_preview/28397578?_ga=2.12704503.1391991202.1734359115-1222810112.1730285089) şablonuna əsaslanır. Məqsəd, istifadəçilərə xəstəxananın xidmətləri, həkimləri və digər məlumatları haqqında məlumat vermək, onlayn randevu almaq və əlaqə forması vasitəsilə xəstəxana ilə asanlıqla əlaqə saxlamaq imkanı təqdim etməkdir.  

#### **Texnologiyalar və Alətlər:**  
- **HTML5**: Strukturu təmin etmək üçün.  
- **SASS (SCSS)**: Stil təbəqəsinin modulyarlaşdırılması və optimallaşdırılması üçün.  
- **Native JavaScript (ES6)**: Dinamik funksionallıqların təmin edilməsi üçün.  
- **Git**: Versiya idarəetməsi üçün.  
- **Webpack**: Modul dəstəyi və fayl birləşdirmə üçün.  
- **Babel**: ES6 kodunun köhnə brauzerlərdə işləməsi üçün transpilyasiya.  
- **ESLint**: JavaScript kodunun keyfiyyətini təmin etmək üçün.  
- **Prettier**: Kod formatlamasını avtomatlaşdırmaq üçün.  

---

### **Layihə Strukturunun Tələbləri:**  
Layihənin fayl və qovluq strukturu aşağıdakı kimi olmalıdır:  

```
/project
├── /assets
│   ├── /images
│   ├── /icons
├── /styles
│   ├── /base
│   │   ├── _reset.scss
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   ├── /layout
│   │   ├── _header.scss
│   │   ├── _footer.scss
│   │   ├── _grid.scss
│   ├── /components
│   │   ├── _button.scss
│   │   ├── _card.scss
│   │   ├── _form.scss
│   └── main.scss
├── /scripts
│   ├── sliderData.js
│   ├── form-validation.js
│   └── main.js
├── /pages
│   ├── index.html
│   ├── services.html
│   ├── doctors.html
│   ├── appointment.html
│   └── contact.html
├── /dist
├── /node_modules
├── .babelrc
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```  

---

### **Səhifələrin Detalları:**  

#### **1. Ana Səhifə (Home Page):**  
- **Başlıq və Naviqasiya:**  
  - Logo və menyudan ibarət naviqasiya paneli.  
  - Responsiv və sticky formatda işləməlidir.  
  - HTML-də `<header>` elementi istifadə edin və içində `<nav>` elementi yaradın.  
  - CSS ilə naviqasiya panelini stilize edin.  
- **Slider Bölməsi:**  
  - Şəkillərlə mesajların dövr etdiyi dinamik bir bölmə.  
  - Slider üçün avtomatik keçid və manuel idarəetmə düymələri.  
  - HTML-də `<div class="slider">` elementi yaradın və içində şəkilləri `<img>` ilə əlavə edin.  
  - JavaScript ilə slider funksionallığını təmin edin.  
- **Xidmətlər Bölməsi:**  
  - Xəstəxananın təklif etdiyi xidmətlərin grid formatında qısa təsviri.  
  - Hər bir xidmət üçün ikon və qısa mətn.  
  - HTML-də `<section class="services">` elementi yaradın və içində xidmətləri `<div class="service">` ilə əlavə edin.  
  - CSS ilə grid strukturunu təmin edin.  
- **Həkimlər Bölməsi:**  
  - Əsas həkimlərin şəkilləri və adları ilə tanıdılması.  
  - Həkimlərin ixtisasları və qısa bioqrafiyaları.  
  - HTML-də `<section class="doctors">` elementi yaradın və içində həkimləri `<div class="doctor">` ilə əlavə edin.  
  - CSS ilə həkimlərin təqdimatını stilize edin.  
- **Xəritə Bölməsi:**  
  - Xəstəxananın məkanını göstərən interaktiv xəritə.  
  - Google Maps API istifadə edilə bilər.  
  - HTML-də `<div id="map">` elementi yaradın və JavaScript ilə Google Maps API-ni inteqrasiya edin.  
- **Footer:**  
  - Əlaqə məlumatları, sosial media linkləri və hüquqların qorunduğunu bildirən mətni əhatə edir.  
  - Abunə forması və sürətli linklər.  
  - HTML-də `<footer>` elementi yaradın və içində əlaqə məlumatlarını və linkləri əlavə edin.  
  - CSS ilə footer-i stilize edin.  

#### **2. Xidmətlər Səhifəsi (Services Page):**  
- Xəstəxananın təklif etdiyi bütün xidmətlər detallı şəkildə təqdim edilməlidir.  
- Hər bir xidmətin təsviri və şəkli olmalıdır.  

#### **3. Həkimlər Səhifəsi (Doctors Page):**  
- Həkimlər haqqında məlumatlar (ad, şəkil, ixtisas).  
- Həkimləri ixtisaslarına görə filtrləmək funksiyası əlavə edilməlidir.  

#### **4. Randevu Al Səhifəsi (Appointment Page):**  
- İstifadəçilər ad, soyad, email, telefon nömrəsi, xidmət növü və tarix daxil edərək randevu ala bilər.  
- Formanın validasiyası edilməlidir.  

#### **5. Əlaqə Səhifəsi (Contact Page):**  
- Ad, email və mesaj üçün bir forma.  
- Xəstəxananın məkanını göstərən xəritə.  

---

### **Responsivlik Tələbləri:**  
Layihə aşağıdakı cihazlarda düzgün görünməlidir:  
- **Mobil:** 360px və daha böyük ekranlar.  
- **Tablet:** 768px və daha böyük ekranlar.  
- **Desktop:** 1024px və daha böyük ekranlar.  

---

### **Adlandırma Standartları:**

#### **SASS/SCSS Adlandırma Standartları:**
- BEM (Block Element Modifier) metodologiyası istifadə edilməlidir
- Komponentlər üçün nümunələr:
  ```scss
  // Blok
  .card { }
  
  // Element
  .card__title { }
  .card__image { }
  
  // Modifier
  .card--featured { }
  .card--dark { }
  
  // Nesting nümunəsi
  .form {
    &__group { }
    &__label { }
    &__input { }
    &--invalid { }
  }
  ```

- Dəyişənlər üçün nümunələr:
  ```scss
  // Rənglər
  $color-primary: #007bff;
  $color-secondary: #6c757d;
  
  // Ölçülər
  $spacing-small: 1rem;
  $spacing-medium: 2rem;
  
  // Breakpoints
  $breakpoint-mobile: 360px;
  $breakpoint-tablet: 768px;
  ```

#### **JavaScript Adlandırma Standartları:**
- camelCase formatında adlandırma istifadə edilməlidir
- Nümunələr:
  ```javascript
  // Dəyişənlər
  const firstName = 'John';
  let userAge = 25;
  
  // Funksiyalar
  function getUserData() { }
  function validateForm() { }
  
  // Class adları PascalCase ilə
  class FormValidator {
    constructor() { }
    validateEmail() { }
  }
  
  // DOM elementləri üçün
  const submitButton = document.querySelector('.form__submit');
  const menuToggle = document.getElementById('menuToggle');
  
  // Event handler funksiyaları
  function handleSubmit() { }
  function handleMenuClick() { }
  ```

- Sabitlər üçün UPPER_SNAKE_CASE:
  ```javascript
  const MAX_FILE_SIZE = 5000000;
  const API_BASE_URL = 'https://api.example.com';
  ```

#### **Fayl Adlandırma Standartları:**
- Komponent faylları: `_component-name.scss`
- JavaScript modulları: `module-name.js`
- Partial SASS faylları: `_partial-name.scss`
- HTML səhifələri: `page-name.html`

---

### **Mərhələli İş Planı:**  

#### **Mərhələ 1: Layihə Strukturunun Hazırlanması**  
- Qovluq və fayl strukturlarını yaradın.  
- SASS üçün `_variables.scss`, `_mixins.scss` və `_reset.scss` fayllarını hazırlayın.  

#### **Mərhələ 2: Ana Səhifənin Hazırlanması**  
- HTML strukturunu yaradın.  
- Header və footer komponentlərini hazırlayın.  
- Slider, xidmətlər və xəritə bölmələrini əlavə edin.  
- CSS və JavaScript funksionallıqlarını tətbiq edin.  

#### **Mərhələ 3: Xidmətlər Səhifəsinin Hazırlanması**  
- HTML-də xidmətlər siyahısını yaradın.  
- CSS ilə grid strukturunda tərtib edin.  

#### **Mərhələ 4: Həkimlər Səhifəsinin Hazırlanması**  
- Həkimlər haqqında məlumatları təqdim edən HTML strukturunu yaradın.  
- JavaScript ilə filtrləmə funksiyasını tətbiq edin.  

#### **Mərhələ 5: Randevu Al Səhifəsinin Hazırlanması**  
- Formanın HTML strukturunu yaradın.  
- JavaScript ilə formanın validasiyasını əlavə edin.  

#### **Mərhələ 6: Əlaqə Səhifəsinin Hazırlanması**  
- Əlaqə forması və xəritə bölmələrini əlavə edin.  

---

### **Mərhələlərin Tətbiqi:**

#### **Mərhələ 1: Layihə Strukturunun Hazırlanması (2-3 gün)**
1. **Git Repozitoriyasının Yaradılması:**
   - GitHub-da yeni repo yaradın
   - Local kompüterdə repo klonlayın
   - Initial commit edin

2. **Qovluq Strukturunun Qurulması:**
   - Bütün qovluqları və əsas faylları yaradın
   - package.json faylını konfiqurasiya edin
   ```bash
   npm init -y
   npm install sass webpack webpack-cli --save-dev
   ```

3. **SASS Təməlinin Qurulması:**
   - _variables.scss-də əsas rəngləri, ölçüləri və breakpoint-ləri təyin edin
   - _mixins.scss-də əsas mixinləri yazın (responsive, flexbox, grid)
   - _reset.scss-də əsas reset stilləri əlavə edin

#### **Mərhələ 2: Ana Səhifənin Hazırlanması (5-7 gün)**
1. **HTML Strukturunun Qurulması:**
   - index.html faylını yaradın
   - Meta tagları və SEO elementlərini əlavə edin
   - Bütün bölmələrin strukturunu yaradın

2. **Header və Footer:**
   - Header-i sticky və responsive edin
   - Mobil menu üçün hamburger düyməsi əlavə edin
   ```javascript
   // main.js
   const hamburger = document.querySelector('.hamburger');
   hamburger.addEventListener('click', () => {
     document.querySelector('.nav').classList.toggle('nav--active');
   });
   ```

3. **Slider Bölməsi:**
   - Slider strukturunu yaradın
   - Slider funksionallığını əlavə edin
   ```javascript
   // sliderData.js
   class Slider {
     constructor(selector) {
       this.slider = document.querySelector(selector);
       this.init();
     }
     init() {
       // Slider initialization
     }
   }
   ```

4. **Digər Bölmələr:**
   - Xidmətlər grid-ini qurun
   - Həkimlər bölməsini yaradın
   - Google Maps inteqrasiyasını əlavə edin

#### **Mərhələ 3: Xidmətlər Səhifəsinin Hazırlanması (3-4 gün)**
1. **Grid Sisteminin Qurulması:**
   ```scss
   // _grid.scss
   .services-grid {
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
     gap: $spacing-medium;
   }
   ```

2. **Xidmət Kartlarının Yaradılması:**
   - Hər xidmət üçün BEM metodologiyası ilə kartlar yaradın
   - Hover effektləri əlavə edin

#### **Mərhələ 4: Həkimlər Səhifəsinin Hazırlanması (4-5 gün)**
1. **Filter Sisteminin Yaradılması:**
   ```javascript
   // doctors.js
   const filterDoctors = (specialty) => {
     const doctors = document.querySelectorAll('.doctor-card');
     doctors.forEach(doctor => {
       if (specialty === 'all' || doctor.dataset.specialty === specialty) {
         doctor.style.display = 'block';
       } else {
         doctor.style.display = 'none';
       }
     });
   };
   ```

2. **Həkim Kartlarının Yaradılması:**
   - Kartların responsiv dizaynını təmin edin
   - Hover effektləri əlavə edin

#### **Mərhələ 5: Randevu Səhifəsinin Hazırlanması (4-5 gün)**
1. **Form Validasiyası:**
   ```javascript
   // form-validation.js
   class FormValidator {
     validateEmail(email) {
       return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
     }
     
     validatePhone(phone) {
       return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(phone);
     }
   }
   ```

2. **Randevu Takviminin İnteqrasiyası:**
   - Tarix və saat seçimi üçün date picker əlavə edin
   - Məşğul tarixləri deaktiv edin

#### **Mərhələ 6: Əlaqə Səhifəsinin Hazırlanması (2-3 gün)**
1. **Əlaqə Forması:**
   - Form validasiyasını əlavə edin
   - AJAX ilə form göndərmə funksionallığını yazın

2. **Xəritə İnteqrasiyası:**
   - Google Maps API-ni konfiqurasiya edin
   - Marker və info window əlavə edin

### **Test və Optimizasiya (2-3 gün)**
1. **Cross-browser Testing:**
   - Chrome, Firefox, Safari və Edge-də test edin
   - Mobil cihazlarda test edin

2. **Performance Optimizasiyası:**
   - Şəkilləri optimize edin
   - Kodu minify edin
   - Lazy loading tətbiq edin

3. **SEO Optimizasiyası:**
   - Meta tagları yoxlayın
   - Alt atributları əlavə edin
   - Semantic HTML strukturunu yoxlayın

---