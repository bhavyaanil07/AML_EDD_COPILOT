import { ResourceDecorator as Resource, ExecutionContext } from "@nitrostack/core";

export class EddResources {

  @Resource({
    uri: "edd://template",
    name: "EDD Report Template",
    description: "Standard AML Enhanced Due Diligence report template",
    mimeType: "application/json"
  })
  async getTemplate(uri: string, ctx: ExecutionContext) {

    ctx.logger.info("Returning EDD Template");

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify({
            sections: [
              "Customer Information",
              "Sanctions Screening",
              "Adverse Media",
              "Risk Assessment",
              "Recommendation",
              "Analyst Notes"
            ]
          }, null, 2)
        }
      ]
    };
  }
}