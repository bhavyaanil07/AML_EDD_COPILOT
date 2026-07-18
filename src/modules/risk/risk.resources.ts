import { ResourceDecorator as Resource, ExecutionContext } from "@nitrostack/core";

export class RiskResources {

  @Resource({
    uri: "risk://levels",
    name: "AML Risk Levels",
    description: "Available AML risk categories",
    mimeType: "application/json"
  })
  async getRiskLevels(uri: string, ctx: ExecutionContext) {

    ctx.logger.info("Returning AML Risk Levels");

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify({
            levels: [
              {
                level: "LOW",
                score: "0-49",
                action: "Standard Due Diligence"
              },
              {
                level: "MEDIUM",
                score: "50-79",
                action: "Enhanced Due Diligence"
              },
              {
                level: "HIGH",
                score: "80-100",
                action: "EDD + Freeze Review"
              }
            ]
          }, null, 2)
        }
      ]
    };
  }
}