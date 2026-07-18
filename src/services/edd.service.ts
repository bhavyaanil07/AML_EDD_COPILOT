import { RiskResult } from "./risk.service";
import { MediaResult } from "./media.service";
import { SanctionsResult } from "./sanctions.service";

export interface EDDReport {

  customerName: string;

  summary: string;

  sanctionsFindings: string;

  adverseMediaFindings: string;

  riskAssessment: string;

  recommendation: string;
}

export class EDDService {

  generateReport(

    customerName: string,

    sanctions: SanctionsResult,

    media: MediaResult,

    risk: RiskResult

  ): EDDReport {

    return {

      customerName,

      summary:
        `${customerName} has completed automated AML investigation using the MCP Compliance Copilot.`,

      sanctionsFindings: sanctions.match
        ? `Potential sanctions match detected with ${sanctions.confidence}% confidence. Risk level: ${sanctions.risk}.`
        : "No sanctions match was detected.",

      adverseMediaFindings: media.found
        ? `${media.articles.length} adverse media article(s) identified. Overall media risk: ${media.overallRisk}.`
        : "No adverse media identified.",

      riskAssessment:
        `Overall AML Risk Score: ${risk.score}/100 (${risk.level}).`,

      recommendation:
        risk.recommendation

    };
  }

}