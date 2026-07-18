import { SanctionsService } from "./sanctions.service.js";
import { MediaService } from "./media.service.js";
import { RiskService } from "./risk.service.js";
import { EDDService } from "./edd.service.js";

export class InvestigationService {

    private sanctionsService = new SanctionsService();

    private mediaService = new MediaService();

    private riskService = new RiskService();

    private eddService = new EDDService();

    async investigateCustomer(customerName: string) {

        const sanctions =
            await this.sanctionsService.screenCustomer(customerName);

        const media =
            await this.mediaService.searchCustomer(customerName);

        const risk =
            this.riskService.calculateRisk(
                sanctions.match,
                sanctions.risk,
                media.found,
                media.overallRisk
            );

        const edd =
            this.eddService.generateReport(
                customerName,
                sanctions,
                media,
                risk
            );

        return {
            customerName,
            sanctions,
            media,
            risk,
            edd
        };

    }

}