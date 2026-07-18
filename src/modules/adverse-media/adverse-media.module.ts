import { Module } from "@nitrostack/core";
import { AdverseMediaTools } from "./adverse-media.tools.js";
import { AdverseMediaResources } from "./adverse-media.resources.js";

@Module({
  name: "adverse-media",
  description: "Search adverse media for AML investigations",
  controllers: [
    AdverseMediaTools,
    AdverseMediaResources
  ]
})
export class AdverseMediaModule {}