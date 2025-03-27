import { Router } from "express";
import {
  agregarClientsController,
  obtenerClientsController,
} from "./controller/clientsController.js";
// import { indexController } from "./controller/indexControllers.js";

// import { serviceController } from "./controller/serviceController.js";
export const allRoutes = Router();

allRoutes.post("/clients", agregarClientsController);
allRoutes.get("/clients", obtenerClientsController);
// allRoutes.get("/service", serviceController);
// allRoutes.get("/contact", contactController);
