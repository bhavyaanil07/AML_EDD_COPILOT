import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";

export class RiskTools {

  @Tool({
    name: "calculate_risk",
    description: "Calculate AML risk score using sanctions and adverse media results.",
    inputSchema: z.object({
      sanctionsMatch: z.boolean(),
      sanctionsRisk: z.string(),
      adverseMediaFound: z.boolean(),
      adverseMediaRisk: z.string()
    })
  })
  async calculateRisk(input: any, ctx: ExecutionContext) {

    ctx.logger.info("Calculating AML Risk Score", input);

    let score = 0;

    // Sanctions Contribution
    if (input.sanctionsMatch) {
      score += 60;

      if (input.sanctionsRisk.toUpperCase() === "HIGH") {
        score += 20;
      } else if (input.sanctionsRisk.toUpperCase() === "MEDIUM") {
        score += 10;
      }
    }

    // Adverse Media Contribution
    if (input.adverseMediaFound) {

      if (input.adverseMediaRisk.toUpperCase() === "HIGH") {
        score += 20;
      } else if (input.adverseMediaRisk.toUpperCase() === "MEDIUM") {
        score += 10;
      } else {
        score += 5;
      }

    }

    let level = "LOW";
    let recommendation = "Proceed with standard due diligence.";

    if (score >= 80) {
      level = "HIGH";
      recommendation = "Immediate Enhanced Due Diligence (EDD) and consider account freeze.";
    } else if (score >= 50) {
      level = "MEDIUM";
      recommendation = "Perform Enhanced Due Diligence.";
    }

    return {
      riskScore: score,
      riskLevel: level,
      recommendation: recommendation
    };
  }
}