import { CreateComponents } from "../createComponents.js";
import {doctors,testimonials} from '../../db/db.js'
import { FunctionsPage } from '../functions.js'
CreateComponents.sliderTestimonials(testimonials)
CreateComponents.createForAboutDoctorCards(doctors)
FunctionsPage.openMenu()
FunctionsPage.openSearchPopup()