import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";

export class EddTools {

  @Tool({
    name: "generate_edd_report",
    description: "Generate an Enhanced Due Diligence (EDD) report for a customer.",
    inputSchema: z.object({
      customerName: z.string(),
      country: z.string(),
      sanctionsMatch: z.boolean(),
      sanctionsRisk: z.string(),
      adverseMediaFound: z.boolean(),
      adverseMediaRisk: z.string(),
      riskScore: z.number(),
      riskLevel: z.string(),
      recommendation: z.string()
    })
  })
  async generateEddReport(input: any, ctx: ExecutionContext) {

    ctx.logger.info("Generating EDD Report", input);

    const report = `
=========================================
      AML ENHANCED DUE DILIGENCE REPORT
=========================================

Customer Information
--------------------
Name            : ${input.customerName}
Country         : ${input.country}

Sanctions Screening
--------------------
Match Found     : ${input.sanctionsMatch ? "YES" : "NO"}
Risk Level      : ${input.sanctionsRisk}

Adverse Media
-------------
Media Found     : ${input.adverseMediaFound ? "YES" : "NO"}
Media Risk      : ${input.adverseMediaRisk}

Overall Risk Assessment
-----------------------
Risk Score      : ${input.riskScore}/100
Risk Level      : ${input.riskLevel}

Recommendation
--------------
${input.recommendation}

=========================================
Prepared by:
AML Investigation & Response Copilot
=========================================
`;

    return {
      generated: true,
      report: report
    };
  }
}