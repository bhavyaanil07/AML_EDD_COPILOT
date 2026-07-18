export interface SanctionsResult {
  match: boolean;
  confidence: number;
  risk: "LOW" | "MEDIUM" | "HIGH";
  recommendation: string;
}

export class SanctionsService {

  async screenCustomer(
    customerName: string
  ): Promise<SanctionsResult> {

    const watchlist = [
      {
        name: "Osama Bin Laden",
        confidence: 100,
        risk: "HIGH"
      },
      {
        name: "John Doe",
        confidence: 92,
        risk: "MEDIUM"
      },
      {
        name: "Rajesh Kumar",
        confidence: 61,
        risk: "LOW"
      }
    ];

    const record = watchlist.find(
      x => x.name.toLowerCase() === customerName.toLowerCase()
    );

    if (!record) {
      return {
        match: false,
        confidence: 0,
        risk: "LOW",
        recommendation: "No sanctions match."
      };
    }

    return {
      match: true,
      confidence: record.confidence,
      risk: record.risk as "LOW" | "MEDIUM" | "HIGH",
      recommendation:
        record.risk === "HIGH"
          ? "Escalate immediately."
          : "Perform additional verification."
    };
  }
}
