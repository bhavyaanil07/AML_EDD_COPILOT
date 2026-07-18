export interface RiskResult {
  score: number;
  level: "LOW" | "MEDIUM" | "HIGH";
  recommendation: string;
}

export class RiskService {

  calculateRisk(
    sanctionsMatch: boolean,
    sanctionsRisk: string,
    adverseMediaFound: boolean,
    adverseMediaRisk: string
  ): RiskResult {

    let score = 0;

    // Sanctions Risk
    if (sanctionsMatch) {

      score += 60;

      switch (sanctionsRisk.toUpperCase()) {
        case "HIGH":
          score += 20;
          break;

        case "MEDIUM":
          score += 10;
          break;

        default:
          score += 5;
      }
    }

    // Adverse Media Risk
    if (adverseMediaFound) {

      switch (adverseMediaRisk.toUpperCase()) {
        case "HIGH":
          score += 20;
          break;

        case "MEDIUM":
          score += 10;
          break;

        default:
          score += 5;
      }
    }

    let level: "LOW" | "MEDIUM" | "HIGH";
    let recommendation: string;

    if (score >= 80) {

      level = "HIGH";

      recommendation =
        "Immediate Enhanced Due Diligence (EDD). Recommend temporary transaction hold and compliance escalation.";

    } else if (score >= 50) {

      level = "MEDIUM";

      recommendation =
        "Perform Enhanced Due Diligence before approving further activity.";

    } else {

      level = "LOW";

      recommendation =
        "Proceed with Standard Due Diligence.";

    }

    return {
      score,
      level,
      recommendation
    };
  }
}