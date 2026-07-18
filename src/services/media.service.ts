export interface MediaArticle {
  title: string;
  source: string;
  risk: "LOW" | "MEDIUM" | "HIGH";
}

export interface MediaResult {
  found: boolean;
  overallRisk: "LOW" | "MEDIUM" | "HIGH";
  articles: MediaArticle[];
}

export class MediaService {

  async searchCustomer(
    customerName: string
  ): Promise<MediaResult> {

    const database: {
      name: string;
      articles: MediaArticle[];
    }[] = [
      {
        name: "Rajesh Kumar",
        articles: [
          {
            title: "Businessman investigated for tax irregularities",
            source: "Economic Times",
            risk: "MEDIUM"
          }
        ]
      },
      {
        name: "John Doe",
        articles: [
          {
            title: "Entity linked to sanctions investigation",
            source: "Reuters",
            risk: "HIGH"
          }
        ]
      }
    ];

    const result = database.find(
      x => x.name.toLowerCase() === customerName.toLowerCase()
    );

    if (!result) {
      return {
        found: false,
        overallRisk: "LOW",
        articles: []
      };
    }

    const overallRisk: "LOW" | "MEDIUM" | "HIGH" =
      result.articles.some(article => article.risk === "HIGH")
        ? "HIGH"
        : result.articles.some(article => article.risk === "MEDIUM")
        ? "MEDIUM"
        : "LOW";

    return {
      found: true,
      overallRisk,
      articles: result.articles
    };
  }

}