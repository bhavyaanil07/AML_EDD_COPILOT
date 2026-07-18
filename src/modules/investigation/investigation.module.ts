import { Module } from "@nitrostack/core";
import { InvestigationTools } from "./investigation.tools.js";

@Module({
    name: "investigation",
    description: "Complete AML Investigation",
    controllers: [
        InvestigationTools
    ]
})
export class InvestigationModule {}