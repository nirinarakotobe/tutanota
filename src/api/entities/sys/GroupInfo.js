// @flow
import {create, TypeRef} from "../../common/EntityFunctions"

export const GroupInfoTypeRef: TypeRef<GroupInfo> = new TypeRef("sys", "GroupInfo")
export const _TypeModel: TypeModel = {
	"name": "GroupInfo",
	"since": 1,
	"type": "LIST_ELEMENT_TYPE",
	"id": 14,
	"rootId": "A3N5cwAO",
	"versioned": false,
	"encrypted": true,
	"values": {
		"_format": {
			"name": "_format",
			"id": 18,
			"since": 1,
			"type": "Number",
			"cardinality": "One",
			"final": false,
			"encrypted": false
		},
		"_id": {
			"name": "_id",
			"id": 16,
			"since": 1,
			"type": "GeneratedId",
			"cardinality": "One",
			"final": true,
			"encrypted": false
		},
		"_listEncSessionKey": {
			"name": "_listEncSessionKey",
			"id": 19,
			"since": 1,
			"type": "Bytes",
			"cardinality": "ZeroOrOne",
			"final": false,
			"encrypted": false
		},
		"_ownerEncSessionKey": {
			"name": "_ownerEncSessionKey",
			"id": 984,
			"since": 17,
			"type": "Bytes",
			"cardinality": "ZeroOrOne",
			"final": true,
			"encrypted": false
		},
		"_ownerGroup": {
			"name": "_ownerGroup",
			"id": 983,
			"since": 17,
			"type": "GeneratedId",
			"cardinality": "ZeroOrOne",
			"final": true,
			"encrypted": false
		},
		"_permissions": {
			"name": "_permissions",
			"id": 17,
			"since": 1,
			"type": "GeneratedId",
			"cardinality": "One",
			"final": true,
			"encrypted": false
		},
		"created": {
			"name": "created",
			"id": 23,
			"since": 1,
			"type": "Date",
			"cardinality": "One",
			"final": true,
			"encrypted": false
		},
		"deleted": {
			"name": "deleted",
			"id": 24,
			"since": 1,
			"type": "Date",
			"cardinality": "ZeroOrOne",
			"final": true,
			"encrypted": false
		},
		"mailAddress": {
			"name": "mailAddress",
			"id": 22,
			"since": 1,
			"type": "String",
			"cardinality": "ZeroOrOne",
			"final": true,
			"encrypted": false
		},
		"name": {
			"name": "name",
			"id": 21,
			"since": 1,
			"type": "String",
			"cardinality": "One",
			"final": false,
			"encrypted": true
		}
	},
	"associations": {
		"mailAddressAliases": {
			"name": "mailAddressAliases",
			"since": 8,
			"type": "AGGREGATION",
			"cardinality": "Any",
			"refType": "MailAddressAlias",
			"final": true
		},
		"group": {
			"name": "group",
			"since": 1,
			"type": "ELEMENT_ASSOCIATION",
			"cardinality": "One",
			"refType": "Group",
			"final": true,
			"external": false
		}
	},
	"app": "sys",
	"version": "25"
}

export function createGroupInfo(): GroupInfo {
	return create(_TypeModel)
}
