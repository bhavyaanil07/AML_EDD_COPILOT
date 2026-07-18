import { Module } from '@nitrostack/core';
import { SanctionsTools } from './sanctions.tools.js';
import { SanctionsResources } from './sanctions.resources.js';
import { SanctionsPrompts } from './sanctions.prompts.js';

@Module({
  name: 'sanctions',
  description: 'AML Sanctions Screening Module',
  controllers: [
    SanctionsTools,
    SanctionsResources,
    SanctionsPrompts
  ]
})
export class SanctionsModule {}