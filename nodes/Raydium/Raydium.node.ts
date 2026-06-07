import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { v2Description } from './resources/v-2';
import { defaultDescription } from './resources/default';

export class Raydium implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'raydium',
		name: 'N8nDevRaydium',
		icon: { light: 'file:./raydium.svg', dark: 'file:./raydium.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Raydium automated market maker and liquidity provider on Solana powering swaps farms and token launches',
		defaults: { name: 'raydium' },
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
					"name": "V 2",
					"value": "V 2",
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
