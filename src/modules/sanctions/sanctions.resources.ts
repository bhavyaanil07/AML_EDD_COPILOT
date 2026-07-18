import { ResourceDecorator as Resource, ExecutionContext } from "@nitrostack/core";

export class SanctionsResources {

  @Resource({
    uri: "sanctions://watchlists",
    name: "Sanctions Watchlists",
    description: "Supported sanctions and watchlists",
    mimeType: "application/json"
  })
  async getWatchlists(uri: string, ctx: ExecutionContext) {

    ctx.logger.info("Returning sanctions watchlists");

    const watchlists = [
      {
        name: "OFAC SDN",
        country: "United States"
      },
      {
        name: "UN Sanctions",
        country: "United Nations"
      },
      {
        name: "EU Sanctions",
        country: "European Union"
      }
    ];

    return {
      contents: [
        {
          uri,
          mimeType: "application/json",
          text: JSON.stringify({ watchlists }, null, 2)
        }
      ]
    };
  }
}