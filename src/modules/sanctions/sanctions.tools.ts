import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";

export class SanctionsTools {

  @Tool({
    name: "screen_sanctions",
    description: "Screen a customer against sanctions and watchlists.",
    inputSchema: z.object({
      full_name: z.string().describe("Customer full name"),
      country: z.string().describe("Customer country")
    })
  })
  async screenSanctions(input: any, ctx: ExecutionContext) {

    ctx.logger.info("Running sanctions screening", input);

    // Demo data for hackathon
    const sanctionsDatabase = [
      {
        name: "Osama Bin Laden",
        country: "Afghanistan",
        risk: "HIGH"
      },
      {
        name: "John Doe",
        country: "Iran",
        risk: "HIGH"
      },
      {
        name: "Rajesh Kumar",
        country: "India",
        risk: "LOW"
      }
    ];

    const match = sanctionsDatabase.find(
      person =>
        person.name.toLowerCase() === input.full_name.toLowerCase()
    );

    if (match) {
      return {
        match: true,
        confidence: 0.97,
        risk: match.risk,
        message: `${match.name} appears on the watchlist.`,
        recommendation: "Perform Enhanced Due Diligence (EDD)"
      };
    }

    return {
      match: false,
      confidence: 0.99,
      risk: "LOW",
      message: "No sanctions match found.",
      recommendation: "Proceed to adverse media screening."
    };
  }
}