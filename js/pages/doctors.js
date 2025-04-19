import { CreateComponents } from "../createComponents.js";
import {doctors,testimonials} from '../../db/db.js'
import {FunctionsPage} from '../functions.js'
CreateComponents.createDoctorCards(doctors)
CreateComponents.sliderTestimonials(testimonials)
FunctionsPage.openMenu()
FunctionsPage.openSearchPopup()
