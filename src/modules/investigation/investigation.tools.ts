import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";
import { InvestigationService } from "../../services/investigation.service.js";

export class InvestigationTools {

    private investigationService = new InvestigationService();

    @Tool({
        name: "investigate_customer",
        description: "Perform a complete AML investigation and return the final EDD report.",
        inputSchema: z.object({
            customerName: z.string(),
            country: z.string()
        })
    })
    async investigateCustomer(input: any, ctx: ExecutionContext) {

        ctx.logger.info("Starting Complete AML Investigation", input);

        const result =
            await this.investigationService.investigateCustomer(
                input.customerName
            );

        return {
            customer: input.customerName,
            country: input.country,
            sanctions: result.sanctions,
            adverseMedia: result.media,
            risk: result.risk,
            eddReport: result.edd
        };
    }
}