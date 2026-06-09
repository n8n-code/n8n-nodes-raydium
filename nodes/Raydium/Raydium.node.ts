import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { v2Description } from './resources/v2';
import { defaultDescription } from './resources/default';

export class Raydium implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Raydium',
		name: 'N8nDevRaydium',
		icon: { light: 'file:./raydium.svg', dark: 'file:./raydium.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Raydium AMM liquidity provider Solana swaps farms token launches',
		defaults: { name: 'Raydium' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevRaydiumApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "v2",
					"value": "v2",
					"description": ""
				},
				{
					"name": "Default",
					"value": "Default",
					"description": ""
				}
			],
			"default": ""
		},
		...v2Description,
		...defaultDescription
		],
	};
}
