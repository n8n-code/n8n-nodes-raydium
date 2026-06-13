import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "Get Pools Pools Get",
					"value": "Get Pools Pools Get",
					"action": "Get Pools",
					"description": "Get Pools",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pools"
						}
					}
				},
				{
					"name": "Get Pairs Pairs Get",
					"value": "Get Pairs Pairs Get",
					"action": "Get Pairs",
					"description": "Get Pairs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pairs"
						}
					}
				},
				{
					"name": "Get Info Info Get",
					"value": "Get Info Info Get",
					"action": "Get Info",
					"description": "Get Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/info"
						}
					}
				},
				{
					"name": "Get Self Info A Admin Self Info Get",
					"value": "Get Self Info A Admin Self Info Get",
					"action": "Get Self Info",
					"description": "Get Self Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/a/admin/self_info"
						}
					}
				},
				{
					"name": "Get Self Ip A Admin Self Ip Get",
					"value": "Get Self Ip A Admin Self Ip Get",
					"action": "Get Self Ip",
					"description": "Get Self Ip",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/a/admin/self_ip"
						}
					}
				},
				{
					"name": "Get Pyth Mainnet Pools Pyth Pools Get",
					"value": "Get Pyth Mainnet Pools Pyth Pools Get",
					"action": "Get Pyth Mainnet Pools",
					"description": "Get Pyth Mainnet Pools",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/pyth/pools"
						}
					}
				},
				{
					"name": "Totalcoins Ray Totalcoins Get",
					"value": "Totalcoins Ray Totalcoins Get",
					"action": "Totalcoins",
					"description": "Totalcoins",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ray/totalcoins"
						}
					}
				},
				{
					"name": "Circulating Ray Circulating Get",
					"value": "Circulating Ray Circulating Get",
					"action": "Circulating",
					"description": "Circulating",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/ray/circulating"
						}
					}
				},
				{
					"name": "Server Check Server Check Get",
					"value": "Server Check Server Check Get",
					"action": "Server Check",
					"description": "Server Check",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/server-check"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pools Pools Get"
					]
				}
			}
		},
		{
			"displayName": "GET /pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pairs Pairs Get"
					]
				}
			}
		},
		{
			"displayName": "GET /info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Info Info Get"
					]
				}
			}
		},
		{
			"displayName": "GET /a/admin/self_info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Self Info A Admin Self Info Get"
					]
				}
			}
		},
		{
			"displayName": "GET /a/admin/self_ip",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Self Ip A Admin Self Ip Get"
					]
				}
			}
		},
		{
			"displayName": "GET /pyth/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Get Pyth Mainnet Pools Pyth Pools Get"
					]
				}
			}
		},
		{
			"displayName": "GET /ray/totalcoins",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Totalcoins Ray Totalcoins Get"
					]
				}
			}
		},
		{
			"displayName": "GET /ray/circulating",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Circulating Ray Circulating Get"
					]
				}
			}
		},
		{
			"displayName": "GET /server-check",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"Server Check Server Check Get"
					]
				}
			}
		},
];
