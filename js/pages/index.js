import { FunctionsPage } from "../functions.js";
import { CreateComponents } from "../createComponents.js";
import {indexSliders,services,doctorsDetails,testimonials,pricing} from '../../db/db.js'
FunctionsPage.openMenu()
FunctionsPage.openSearchPopup()
CreateComponents.createMainSlider(indexSliders)
CreateComponents.createServicesCard(services)
CreateComponents.createOurDoctorCards(doctorsDetails)
CreateComponents.sliderTestimonials(testimonials)
CreateComponents.createPrising(pricing)
