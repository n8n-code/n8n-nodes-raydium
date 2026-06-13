import type { INodeProperties } from 'n8n-workflow';

export const v2Description: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					]
				}
			},
			"options": [
				{
					"name": "Get Info v2 Main Info Get",
					"value": "Get Info v2 Main Info Get",
					"action": "Get Info",
					"description": "Get Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/info"
						}
					}
				},
				{
					"name": "Get Rpcs v2 Main Rpcs Get",
					"value": "Get Rpcs v2 Main Rpcs Get",
					"action": "Get Rpcs",
					"description": "Get Rpcs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/rpcs"
						}
					}
				},
				{
					"name": "Get Version v2 Main Version Get",
					"value": "Get Version v2 Main Version Get",
					"action": "Get Version",
					"description": "Get Version",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/version"
						}
					}
				},
				{
					"name": "Get Ido Infos v2 Main Ido Pools Get",
					"value": "Get Ido Infos v2 Main Ido Pools Get",
					"action": "Get Ido Infos",
					"description": "Get Ido Infos",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/ido/pools"
						}
					}
				},
				{
					"name": "Get Ido Project Info v2 Main Ido Project Ido ID Get",
					"value": "Get Ido Project Info v2 Main Ido Project Ido ID Get",
					"action": "Get Ido Project Info",
					"description": "Get Ido Project Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/ido/project/{{$parameter[\"ido_id\"]}}"
						}
					}
				},
				{
					"name": "Get Migrate Lp v2 Main Migrate Lp Get",
					"value": "Get Migrate Lp v2 Main Migrate Lp Get",
					"action": "Get Migrate Lp",
					"description": "Get Migrate Lp",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/migrate-lp"
						}
					}
				},
				{
					"name": "Get Chain Time v2 Main Chain Time Get",
					"value": "Get Chain Time v2 Main Chain Time Get",
					"action": "Get Chain Time",
					"description": "Get Chain Time",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/chain/time"
						}
					}
				},
				{
					"name": "Get Coin Price v2 Main Price Get",
					"value": "Get Coin Price v2 Main Price Get",
					"action": "Get Coin Price",
					"description": "Get Coin Price",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/price"
						}
					}
				},
				{
					"name": "Get Farm Info v2 Main Farm Info Get",
					"value": "Get Farm Info v2 Main Farm Info Get",
					"action": "Get Farm Info",
					"description": "Get Farm Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/farm/info"
						}
					}
				},
				{
					"name": "Get Pairs All v2 Main Pairs All Get",
					"value": "Get Pairs All v2 Main Pairs All Get",
					"action": "Get Pairs All",
					"description": "Get Pairs All",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/pairs/all"
						}
					}
				},
				{
					"name": "Get Pairs v2 Main Pairs Get",
					"value": "Get Pairs v2 Main Pairs Get",
					"action": "Get Pairs",
					"description": "Get Pairs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/main/pairs"
						}
					}
				},
				{
					"name": "Get Token Raydium v2 SDK Token Raydium Mainnet JSON Get",
					"value": "Get Token Raydium v2 SDK Token Raydium Mainnet JSON Get",
					"action": "Get Token Raydium",
					"description": "Get Token Raydium",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/token/raydium.mainnet.json"
						}
					}
				},
				{
					"name": "Get Liquidity v2 SDK Liquidity Mainnet JSON Get",
					"value": "Get Liquidity v2 SDK Liquidity Mainnet JSON Get",
					"action": "Get Liquidity",
					"description": "Get Liquidity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/liquidity/mainnet.json"
						}
					}
				},
				{
					"name": "Get Liquidity UI Swap v2 SDK Liquidity Mainnet UI JSON Get",
					"value": "Get Liquidity UI Swap v2 SDK Liquidity Mainnet UI JSON Get",
					"action": "Get Liquidity Ui Swap",
					"description": "Get Liquidity Ui Swap",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/liquidity/mainnet.ui.json"
						}
					}
				},
				{
					"name": "Get Liquidity Item Mint v2 SDK Liquidity Mint Mint 1 Mint 2 Get",
					"value": "Get Liquidity Item Mint v2 SDK Liquidity Mint Mint 1 Mint 2 Get",
					"action": "Get Liquidity Item Mint",
					"description": "Get Liquidity Item Mint",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/liquidity/mint/{{$parameter[\"mint1\"]}}/{{$parameter[\"mint2\"]}}"
						}
					}
				},
				{
					"name": "Get Farm v2 SDK Farm Mainnet JSON Get",
					"value": "Get Farm v2 SDK Farm Mainnet JSON Get",
					"action": "Get Farm",
					"description": "Get Farm",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/farm/mainnet.json"
						}
					}
				},
				{
					"name": "Get Farm v2 v2 SDK Farm v2 Mainnet JSON Get",
					"value": "Get Farm v2 v2 SDK Farm v2 Mainnet JSON Get",
					"action": "Get Farm V2",
					"description": "Get Farm V2",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/sdk/farm-v2/mainnet.json"
						}
					}
				},
				{
					"name": "Get Farm Staker v2 Snapshot Farm Staker Pool ID Get",
					"value": "Get Farm Staker v2 Snapshot Farm Staker Pool ID Get",
					"action": "Get Farm Staker",
					"description": "Get Farm Staker",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/snapshot/farm-staker/{{$parameter[\"pool_id\"]}}"
						}
					}
				},
				{
					"name": "Get Amm Info v2 Amm v3 Amm Configs Get",
					"value": "Get Amm Info v2 Amm v3 Amm Configs Get",
					"action": "Get Amm Info",
					"description": "Get Amm Info",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/ammV3/ammConfigs"
						}
					}
				},
				{
					"name": "Get Pools v2 Amm v3 Amm Pools Get",
					"value": "Get Pools v2 Amm v3 Amm Pools Get",
					"action": "Get Pools",
					"description": "Get Pools",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/ammV3/ammPools"
						}
					}
				},
				{
					"name": "Get Position Line R v2 Amm v3 Position Line Pool ID Get",
					"value": "Get Position Line R v2 Amm v3 Position Line Pool ID Get",
					"action": "Get Position Line R",
					"description": "Get Position Line R",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v2/ammV3/positionLine/{{$parameter[\"pool_id\"]}}"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v2/main/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Info v2 Main Info Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/rpcs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Rpcs v2 Main Rpcs Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/version",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Version v2 Main Version Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/ido/pools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Ido Infos v2 Main Ido Pools Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/ido/project/{ido_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Ido Project Info v2 Main Ido Project Ido ID Get"
					]
				}
			}
		},
		{
			"displayName": "Ido ID",
			"name": "ido_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Ido Project Info v2 Main Ido Project Ido ID Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/migrate-lp",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Migrate Lp v2 Main Migrate Lp Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/chain/time",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Chain Time v2 Main Chain Time Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/price",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Coin Price v2 Main Price Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/farm/info",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Farm Info v2 Main Farm Info Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/pairs/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Pairs All v2 Main Pairs All Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/main/pairs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Pairs v2 Main Pairs Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/token/raydium.mainnet.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Token Raydium v2 SDK Token Raydium Mainnet JSON Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/liquidity/mainnet.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Liquidity v2 SDK Liquidity Mainnet JSON Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/liquidity/mainnet.ui.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Liquidity UI Swap v2 SDK Liquidity Mainnet UI JSON Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/liquidity/mint/{mint1}/{mint2}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Liquidity Item Mint v2 SDK Liquidity Mint Mint 1 Mint 2 Get"
					]
				}
			}
		},
		{
			"displayName": "Mint 1",
			"name": "mint1",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Liquidity Item Mint v2 SDK Liquidity Mint Mint 1 Mint 2 Get"
					]
				}
			}
		},
		{
			"displayName": "Mint 2",
			"name": "mint2",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Liquidity Item Mint v2 SDK Liquidity Mint Mint 1 Mint 2 Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/farm/mainnet.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Farm v2 SDK Farm Mainnet JSON Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/sdk/farm-v2/mainnet.json",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Farm v2 v2 SDK Farm v2 Mainnet JSON Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/snapshot/farm-staker/{pool_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Farm Staker v2 Snapshot Farm Staker Pool ID Get"
					]
				}
			}
		},
		{
			"displayName": "Pool ID",
			"name": "pool_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Farm Staker v2 Snapshot Farm Staker Pool ID Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/ammV3/ammConfigs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Amm Info v2 Amm v3 Amm Configs Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/ammV3/ammPools",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Pools v2 Amm v3 Amm Pools Get"
					]
				}
			}
		},
		{
			"displayName": "GET /v2/ammV3/positionLine/{pool_id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Position Line R v2 Amm v3 Position Line Pool ID Get"
					]
				}
			}
		},
		{
			"displayName": "Pool ID",
			"name": "pool_id",
			"required": true,
			"default": "",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"v2"
					],
					"operation": [
						"Get Position Line R v2 Amm v3 Position Line Pool ID Get"
					]
				}
			}
		},
];
