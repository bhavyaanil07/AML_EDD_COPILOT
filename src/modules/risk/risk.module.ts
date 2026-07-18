import { Module } from "@nitrostack/core";

import { RiskTools } from "./risk.tools.js";
import { RiskResources } from "./risk.resources.js";

@Module({
  name: "risk",
  description: "AML Risk Assessment Module",
  controllers: [
    RiskTools,
    RiskResources
  ]
})
export class RiskModule {}