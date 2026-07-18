import { Module } from "@nitrostack/core";

import { EddTools } from "./edd.tools.js";
import { EddResources } from "./edd.resources.js";

@Module({
  name: "edd",
  description: "Enhanced Due Diligence Module",
  controllers: [
    EddTools,
    EddResources
  ]
})
export class EddModule {}