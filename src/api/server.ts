import express from "express";
import cors from "cors";

import { InvestigationAgent } from "../agents/investigation.agent.js";

const app = express();

app.use(cors());
app.use(express.json());

const agent = new InvestigationAgent();

app.get("/", (_, res) => {

    res.json({
        status: "running",
        service: "AML Investigation API"
    });

});

app.post("/investigate", async (req, res) => {

    try {

        const { customerName } = req.body;

        if (!customerName) {

            return res.status(400).json({
                error: "customerName is required"
            });

        }

        const response =
            await agent.investigate(customerName);

        return res.json(response);

    }

    catch (err) {

        console.error(err);

        return res.status(500).json({
            error: "Internal Server Error"
        });

    }

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `🚀 AML REST API running on http://localhost:${PORT}`
    );

});