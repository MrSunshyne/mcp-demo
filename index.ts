import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import z from 'zod'

const server = new McpServer({
    name: "Sandeep First MCP Server",
    version: "1.0.0"
})

server.tool("add two numbers", 
    { a: z.number(), b: z.number() },
    async ({ a, b }) => {
        return { 
            content: [{ type: "text", text: String(a + b) }]
        }
    }
)

server.tool("factorial of a number", 
    { n: z.number() },
    async ({ n }) => {
        const factorial = (num: number): number => {
            if (num === 0 || num === 1) return 1;
            return num * factorial(num - 1);
        };
        return { 
            content: [{ type: "text", text: String(factorial(n)) }]
        }
    }
)