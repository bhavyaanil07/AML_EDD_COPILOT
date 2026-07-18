import { ToolDecorator as Tool, ExecutionContext, z } from "@nitrostack/core";

export class AdverseMediaTools {

  @Tool({
    name: "search_adverse_media",
    description: "Search recent adverse media related to a customer.",
    inputSchema: z.object({
      full_name: z.string().describe("Customer full name"),
      country: z.string().optional()
    })
  })
  async searchAdverseMedia(input: any, ctx: ExecutionContext) {

    ctx.logger.info("Searching adverse media", input);

    // Demo data (replace with News API later)
    const newsDatabase = [
      {
        name: "Rajesh Kumar",
        articles: [
          {
            title: "Local businessman investigated for tax irregularities",
            source: "Economic Times",
            risk: "Medium"
          }
        ]
      },
      {
        name: "John Doe",
        articles: [
          {
            title: "Entity linked to sanctions investigation",
            source: "Reuters",
            risk: "High"
          }
        ]
      }
    ];

    const result = newsDatabase.find(
      item => item.name.toLowerCase() === input.full_name.toLowerCase()
    );

    if (!result) {
      return {
        found: false,
        overallRisk: "LOW",
        articles: []
      };
    }

    return {
      found: true,
      overallRisk: result.articles.some(a => a.risk === "High") ? "HIGH" : "MEDIUM",
      articles: result.articles
    };
  }
}