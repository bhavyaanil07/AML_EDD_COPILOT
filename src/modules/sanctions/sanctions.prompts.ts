import { PromptDecorator as Prompt, ExecutionContext } from "@nitrostack/core";

export class SanctionsPrompts {

  @Prompt({
    name: "aml_investigation_help",
    description: "Guide for using the AML Investigation Copilot"
  })
  async help(args: any, ctx: ExecutionContext) {

    ctx.logger.info("Generating AML help prompt");

    return [
      {
        role: "user" as const,
        content: "How do I investigate a suspicious customer?"
      },
      {
        role: "assistant" as const,
        content: `AML Investigation Workflow

1. Run screen_sanctions
2. Search adverse media
3. Calculate customer risk
4. Generate EDD memo
5. Draft freeze request (if High Risk)

Example:

Customer:
Name: Rajesh Kumar
Country: India

↓

screen_sanctions()

↓

No Match

↓

Proceed to adverse media screening.`
      }
    ];
  }
}