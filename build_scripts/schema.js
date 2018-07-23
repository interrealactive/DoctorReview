
var schema = {
  "type": "object",
  "properties": {
    "providers": {
      "type": "array",
      "minItems": 10000,
      "maxItems": 10000,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number",
            "unique": true,
            "minimum": 1
          },
          "name": {
            "type": "string",
            "faker": "name.findName"
          },
          "speciality": {
            "type": "string",
            "chance": {
              "pickone": [
                [
                  "Family Practice",
                  "Internal Medicine",
                  "General Practice"
                ]
              ]
            }
          },
          "imageUrl": {
            "type": "string",
            "faker": "internet.avatar"
          },
          "rank":{
            "type":"number",
            "minimum":1,
            "maximum":3
          },
          "city": {
            "type": "string",
            "faker": "address.city"
          },
          "state": {
            "type": "string",
            "faker": "address.state"
          }
          ,
          "zipcode": {
            "type": "string",
            "faker": "address.zipCode"
          }
          ,
          "street": {
            "type": "string",
            "faker": "address.streetAddress"
          }
        },
        "required": ["id", "speciality", "name","rank","imageUrl","city","state","zipcode","street"]
			}
		},
		"reviews": {
			"type": "array",
			"minItems": 1,
			"maxItems": 1,
			"items": {
				"type": "object",
				"properties": {
					"id": {
						"type": "number",
						"unique": true,
						"minimum": 1
					},
					"providerId": {
						"type": "number",
						"minimum": 1
					},
					"name": {
						"type": "string",
						"faker": "name.findName"
					},
					"body": {
						"type": "string",
						"faker": "name.findName"
					}
				},
				"required": ["id", "providerId", "name","body"]
			}
		}
  },
  "required": ["providers","reviews"]
};

module.exports = schema;