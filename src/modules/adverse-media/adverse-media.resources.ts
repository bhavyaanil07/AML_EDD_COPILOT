import { ResourceDecorator as Resource, ExecutionContext } from "@nitrostack/core";

export class AdverseMediaResources {

  @Resource({
    uri: "adverse-media://sources",
    name: "Supported News Sources",
    description: "News providers used for adverse media screening",
    mimeType: "application/json"
  })
  async getSources(uri: string, ctx: ExecutionContext) {

    ctx.logger.info("Returning media sources");

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify({
            providers: [
              "Reuters",
              "BBC",
              "Economic Times",
              "Times of India",
              "The Hindu"
            ]
          }, null, 2)
        }
      ]
    };
  }
}