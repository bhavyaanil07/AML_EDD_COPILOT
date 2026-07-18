import { McpApp, Module, ConfigModule } from "@nitrostack/core";

import { SystemHealthCheck } from "./health/system.health.js";

import { SanctionsModule } from "./modules/sanctions/sanctions.module.js";
import { AdverseMediaModule } from "./modules/adverse-media/adverse-media.module.js";
import { RiskModule } from "./modules/risk/risk.module.js";
import { EddModule } from "./modules/edd/edd.module.js";

@McpApp({
  module: AppModule,
  server: {
    name: "aml-investigation-copilot",
    version: "1.0.0"
  },
  logging: {
    level: "info"
  }
})
@Module({
  name: "app",
  description: "AML Investigation & Response Copilot",

  imports: [
    ConfigModule.forRoot(),

    SanctionsModule,
    AdverseMediaModule,
    RiskModule,
    EddModule
  ],

  providers: [
    SystemHealthCheck
  ]
})
export class AppModule {}