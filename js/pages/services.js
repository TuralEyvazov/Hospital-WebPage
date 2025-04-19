import { FunctionsPage } from "../functions.js";
import { CreateComponents } from "../createComponents.js";
import { services, testimonials} from "../../db/db.js";
FunctionsPage.openMenu()
FunctionsPage.openSearchPopup()
CreateComponents.createServicesCard(services)
CreateComponents.sliderTestimonials(testimonials)