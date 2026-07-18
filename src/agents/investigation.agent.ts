import { InvestigationService } from "../services/investigation.service.js";

export class InvestigationAgent {

    private investigationService = new InvestigationService();

    async investigate(customerName: string) {

        console.log("\n========================================");
        console.log(" AML Investigation Agent Started");
        console.log("========================================");

        console.log("Step 1 → Running sanctions screening...");

        const result =
            await this.investigationService.investigateCustomer(customerName);

        console.log("✔ Sanctions screening completed.");

        console.log("Step 2 → Searching adverse media...");
        console.log("✔ Adverse media search completed.");

        console.log("Step 3 → Calculating AML risk...");
        console.log(
            `✔ Risk Score: ${result.risk.score} (${result.risk.level})`
        );

        console.log("Step 4 → Generating EDD report...");
        console.log("✔ EDD report generated.");

        console.log("========================================");
        console.log(" Investigation Complete");
        console.log("========================================\n");

        return result;
    }

}