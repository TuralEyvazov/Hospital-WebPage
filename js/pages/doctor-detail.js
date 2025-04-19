import { CreateComponents } from "../createComponents.js";
import {doctorsDetails} from '../../db/db.js'
CreateComponents.createDoctordetails(doctorsDetails)
CreateComponents.createOurDoctorCards(doctorsDetails)