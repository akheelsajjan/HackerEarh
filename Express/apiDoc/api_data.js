define({ "api": [
  {
    "group": "Items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/:itemId/delete",
    "title": "To delete single item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Item-ID",
            "description": "<p>Item-ID of the item. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"item Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ebea56d3e96e1029493d149\",\n        \"__v\": 0,\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n        \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n        \"itemName\": \"Fifth Item inside second list\",\n        \"itemId\": \"FiR_vk1YS\",\n        \"listId\": \"c0DRikLt_\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Item Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemroute.js",
    "groupTitle": "Items",
    "name": "PostApiV1ItemsItemidDelete"
  },
  {
    "group": "Items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/:itemId/getItembyID",
    "title": "To Item by ID.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId-ID",
            "description": "<p>itemId-ID of the item. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Item Details Found\",\n    \"status\": 200,\n    \"data\": [\n             {\n                \"_id\": \"5ebea56d3e96e1029493d149\",\n                \"__v\": 0,\n                \"isDone\": false,\n                \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n                \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n                \"itemName\": \"Fifth Item inside second list\",\n                \"itemId\": \"FiR_vk1YS\",\n                \"listId\": \"c0DRikLt_\"\n             }    \n            ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Item Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemroute.js",
    "groupTitle": "Items",
    "name": "PostApiV1ItemsItemidGetitembyid"
  },
  {
    "group": "Items",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/items/:listId/getItemsoflist",
    "title": "To get all Items of a list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId-ID",
            "description": "<p>listId-ID of the item. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Item Details Found\",\n    \"status\": 200,\n    \"data\": [\n             {\n                \"_id\": \"5ebea56d3e96e1029493d149\",\n                \"__v\": 0,\n                \"isDone\": false,\n                \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n                \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n                \"itemName\": \"Fifth Item inside second list\",\n                \"itemId\": \"FiR_vk1YS\",\n                \"listId\": \"c0DRikLt_\"\n             }    \n            ]\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Items Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemroute.js",
    "groupTitle": "Items",
    "name": "PostApiV1ItemsListidGetitemsoflist"
  },
  {
    "group": "Items",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/items/:itemId/edit",
    "title": "To edit details of item",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item details edited successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/itemroute.js",
    "groupTitle": "Items",
    "name": "PutApiV1ItemsItemidEdit"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/all",
    "title": "To get all lists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"list Details Found\",\n    \"status\": 200,\n    \"data\": [\n     {\n        \"listId\": \"D6migV2jO\",\n        \"listName\": \"2/5/2020 list\",\n        \"userId\": \"JxZxAKhEO\",\n        \"creator\": \"Akheel\",\n        \"private\": true,\n        \"modifiedOn\": \"2020-05-15T14:02:26.000Z\",\n        \"createdOn\": \"2020-05-15T14:02:26.000Z\"\n    },\n     {\n        \"listId\": \"eu1R2p-f_\",\n        \"listName\": \"2/5/2020 listfdfsd\",\n        \"userId\": \"JxZxAKhEO\",\n        \"creator\": \"Akheel\",\n        \"private\": true,\n        \"modifiedOn\": \"2020-05-15T14:02:43.000Z\",\n        \"createdOn\": \"2020-05-15T14:02:43.000Z\"\n     }\n    ]\n }",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "GetApiV1ListsAll"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/allLists",
    "title": "To get all lists",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"list Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"_id\": \"5ebea0f23e96e1029493d147\",\n                    \"listId\": \"D6migV2jO\",\n                    \"listName\": \"2/5/2020 list\",\n                    \"userId\": \"JxZxAKhEO\",\n                    \"creator\": \"Akheel\",\n                    \"private\": true,\n                    \"modifiedOn\": \"2020-05-15T14:02:26.000Z\",\n                    \"createdOn\": \"2020-05-15T14:02:26.000Z\",\n                    \"__v\": 0\n                },\n\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "GetApiV1ListsAlllists"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/lists/:userId/getlistofuser",
    "title": "To get all lists of a user",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"_id\": \"5ebea0f23e96e1029493d147\",\n            \"listId\": \"D6migV2jO\",\n            \"listName\": \"2/5/2020 list\",\n            \"userId\": \"JxZxAKhEO\",\n            \"creator\": \"Akheel\",\n            \"private\": true,\n            \"modifiedOn\": \"2020-05-15T14:02:26.000Z\",\n            \"createdOn\": \"2020-05-15T14:02:26.000Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"5ebea1033e96e1029493d148\",\n            \"listId\": \"eu1R2p-f_\",\n            \"listName\": \"2/5/2020 listfdfsd\",\n            \"userId\": \"JxZxAKhEO\",\n            \"creator\": \"Akheel\",\n            \"private\": true,\n            \"modifiedOn\": \"2020-05-15T14:02:43.000Z\",\n            \"createdOn\": \"2020-05-15T14:02:43.000Z\",\n            \"__v\": 0\n        }\n    ],\n    \"currentPage\": 1\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "GetApiV1ListsUseridGetlistofuser"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/createList",
    "title": "To create a list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listName",
            "description": "<p>listName of the list. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "creatorName",
            "description": "<p>creatorName of the list creator. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "private-field",
            "description": "<p>private-field for Public or Private List. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"To-Do-List created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"listId\": \"c0DRikLt_\",\n        \"listName\": \"2/5/2020 list\",\n        \"userId\": \"JxZxAKhEO\",\n        \"creator\": \"Akheel\",\n        \"private\": true,\n        \"_id\": \"5ebe9a5f3e96e1029493d146\",\n        \"modifiedOn\": \"2020-05-15T13:34:23.000Z\",\n        \"createdOn\": \"2020-05-15T13:34:23.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create list\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "PostApiV1ListsCreatelist"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/lists/:listId/delete",
    "title": "To delete a single list.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "List-ID",
            "description": "<p>List-ID of the list. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"list Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ebe9a5f3e96e1029493d146\",\n        \"listId\": \"c0DRikLt_\",\n        \"listName\": \"2/5/2020 list\",\n        \"userId\": \"JxZxAKhEO\",\n        \"creator\": \"Akheel\",\n        \"private\": true,\n        \"__v\": 0,\n        \"modifiedOn\": \"2020-05-15T13:34:23.000Z\",\n        \"createdOn\": \"2020-05-15T13:34:23.000Z\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No List Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "PostApiV1ListsListidDelete"
  },
  {
    "group": "Lists",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/lists/:listId/edit",
    "title": "To edit details of list",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"list Edited successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/listroute.js",
    "groupTitle": "Lists",
    "name": "PutApiV1ListsListidEdit"
  },
  {
    "group": "Undoitem",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/Undoitem/deleteAllUndoItems",
    "title": "To delete  all undo items.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, result.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All undo items Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 0,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/itemUndoroutes.js",
    "groupTitle": "Undoitem",
    "name": "GetApiV1UndoitemDeleteallundoitems"
  },
  {
    "group": "Undoitem",
    "version": "1.0.0",
    "type": "get",
    "url": "/api/v1/Undoitem/:listId/getPreviousItem",
    "title": "To get all Undoitem",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Item Details Found\",\n    \"status\": 200,\n    \"data\": [\n                {\n                    \"_id\": \"5ebea56d3e96e1029493d149\",\n                    \"__v\": 0,\n                    \"isDone\": false,\n                    \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n                    \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n                    \"itemName\": \"Fifth Item inside second list\",\n                    \"itemId\": \"FiR_vk1YS\",\n                    \"listId\": \"c0DRikLt_\"\n                 }    \n        \n        ................\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/itemUndoroutes.js",
    "groupTitle": "Undoitem",
    "name": "GetApiV1UndoitemListidGetpreviousitem"
  },
  {
    "group": "Undoitem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/Undoitem/:itemId/delete",
    "title": "To delete single undo item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Item-ID",
            "description": "<p>Item-ID of the item. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"item Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ebea56d3e96e1029493d149\",\n        \"__v\": 0,\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n        \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n        \"itemName\": \"Fifth Item inside second list\",\n        \"itemId\": \"FiR_vk1YS\",\n        \"listId\": \"c0DRikLt_\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"No Item Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemUndoroutes.js",
    "groupTitle": "Undoitem",
    "name": "PostApiV1UndoitemItemidDelete"
  },
  {
    "group": "Undoitem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/Undoitem/:listId/getPreviousItem",
    "title": "To create a UndoItem.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>listId of the  of Item. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of the Item. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemName",
            "description": "<p>itemName  of the item. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "operationName",
            "description": "<p>operationName To  performed on Item. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Item history  saved successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ebea56d3e96e1029493d149\",\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n        \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n        \"itemName\": \"Fifth Item inside second list\",\n        \"itemId\": \"FiR_vk1YS\",\n        \"listId\": \"c0DRikLt_\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed To Save Item History\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemUndoroutes.js",
    "groupTitle": "Undoitem",
    "name": "PostApiV1UndoitemListidGetpreviousitem"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "Forgot Password.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "UserId",
            "description": "<p>UserId of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": \"Password updatePassword successfully\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"UserId\" parameter is missing\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersForgotpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/logout",
    "title": "Logout.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Logged Out Successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersLogout"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/resetPassword",
    "title": "Reset Password .",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Email",
            "description": "<p>ID  Email ID of the user. (body params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Mail sent Successfully\",\n    \"status\": 200,\n    \"data\": \"Password reset successful\"\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"UserId\" parameter is missing\",\n    \"status\": 400,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersResetpassword"
  },
  {
    "group": "Users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "To Signup user.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "FirstName",
            "description": "<p>FirstName of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Lastname",
            "description": "<p>Lastname of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>Password of MyToDo account. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "EmailID",
            "description": "<p>EmailID of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "Mobile-number",
            "description": "<p>Mobile-number of the user. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "userVerificationStatus",
            "description": "<p>userVerificationStatus For email verification of the user.(Default : false)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"User created\",\n    \"status\": 200,\n    \"data\": {\n        \"userId\": \"String\",\n        \"firstName\": \"String\",\n        \"lastName\": \"String\",\n        \"password\": \"String\"\n        \"email\": \"String\",\n        \"mobileNumber\": \"String\",\n        \"userVerificationStatus\": false,\n        \"friends\": [],\n        \"createdOn\": \"Date\",                                    \n        \"_id\": \"5b8cqu9Zy5ui08c6660\",\n        \"__v\": 0\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create new User\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"User Already Present With this Email\",\n    \"status\": 403,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "Users",
    "name": "PostApiV1UsersSignup"
  },
  {
    "group": "item",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/item/createItem",
    "title": "To create a Item.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "listId",
            "description": "<p>of the Item. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>of the itemName. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"Item created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ebea56d3e96e1029493d149\",\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n        \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n        \"itemName\": \"Fifth Item inside second list\",\n        \"itemId\": \"FiR_vk1YS\",\n        \"listId\": \"c0DRikLt_\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create Item\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/itemroute.js",
    "groupTitle": "item",
    "name": "PostApiV1ItemCreateitem"
  },
  {
    "group": "subItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subItem/create",
    "title": "To create a subItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ItemID",
            "description": "<p>ItemID of the subItem. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>Name of the subItem. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"SubItem created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ebead1b3e96e1029493d14a\",\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:54:19.000Z\",\n        \"createdOn\": \"2020-05-15T14:54:19.000Z\",\n        \"subItemName\": \"zzz\",\n        \"subItemId\": \"I8naBu1Y8\",\n        \"itemId\": \"FiR_vk1YS\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create SubItem\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/subItemroute.js",
    "groupTitle": "subItem",
    "name": "PostApiV1SubitemCreate"
  },
  {
    "group": "subItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subItem/:itemId/getSubItemOfItem",
    "title": "To get  a subItem by ID",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "ItemID",
            "description": "<p>ItemID of the subItem. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Item Details Found\",\n    \"status\": 200,\n    \"data\": [\n        {\n            \"__v\": 0,\n            \"_id\": \"5ebead1b3e96e1029493d14a\",\n            \"isDone\": false,\n            \"modifiedOn\": \"2020-05-15T14:54:19.000Z\",\n            \"createdOn\": \"2020-05-15T14:54:19.000Z\",\n            \"subItemName\": \"zzz\",\n            \"subItemId\": \"I8naBu1Y8\",\n            \"itemId\": \"FiR_vk1YS\"\n        }\n    ]\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \"error\": true,\n    \"message\": \"Failed to create SubItem\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/subItemroute.js",
    "groupTitle": "subItem",
    "name": "PostApiV1SubitemItemidGetsubitemofitem"
  },
  {
    "group": "subItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subItem/:subItemId/delete",
    "title": "To delete single subItem.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>subItemId of the subItem. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"subItem Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"_id\": \"5ebea56d3e96e1029493d149\",\n        \"__v\": 0,\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:21:33.000Z\",\n        \"createdOn\": \"2020-05-15T14:21:33.000Z\",\n        \"itemName\": \"Fifth Item inside second list\",\n        \"itemId\": \"FiR_vk1YS\",\n        \"listId\": \"c0DRikLt_\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/subItemroute.js",
    "groupTitle": "subItem",
    "name": "PostApiV1SubitemSubitemidDelete"
  },
  {
    "group": "subItem",
    "version": "1.0.0",
    "type": "put",
    "url": "/api/v1/subItem/:subItemId/edit",
    "title": "To edit details of SubItem",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"SubItem Edited successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"nModified\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/subItemroute.js",
    "groupTitle": "subItem",
    "name": "PutApiV1SubitemSubitemidEdit"
  },
  {
    "group": "subUndoItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subUndoItem/createSubUndoItem",
    "title": "To create a subUndoItem",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "itemId",
            "description": "<p>itemId of SubItem. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemId",
            "description": "<p>subItemId  of the SubItem. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "subItemName",
            "description": "<p>subItemName  of the subitem. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "isDone",
            "description": "<p>isDone of the subitem. (body params)</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "operationName",
            "description": "<p>operationName To identify action performed on SubItem. (body params)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"SubItem created successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"__v\": 0,\n        \"_id\": \"5ebead1b3e96e1029493d14a\",\n        \"isDone\": false,\n        \"modifiedOn\": \"2020-05-15T14:54:19.000Z\",\n        \"createdOn\": \"2020-05-15T14:54:19.000Z\",\n        \"subItemName\": \"zzz\",\n        \"subItemId\": \"I8naBu1Y8\",\n        \"itemId\": \"FiR_vk1YS\"\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/subItemUndoroute.js",
    "groupTitle": "subUndoItem",
    "name": "PostApiV1SubundoitemCreatesubundoitem"
  },
  {
    "group": "subUndoItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subUndoItem/:subItemId/delete",
    "title": "To delete single subitem from subUndoItem.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"All SubUndoItem Deleted successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/subItemUndoroute.js",
    "groupTitle": "subUndoItem",
    "name": "PostApiV1SubundoitemSubitemidDelete"
  },
  {
    "group": "subUndoItem",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/subUndoItem/:subItemId/delete",
    "title": "To delete single subitem from subUndoItem.",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "SubItem-ID",
            "description": "<p>SubItem-ID of the subitem. (route params) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "\n{\n    \"error\": false,\n    \"message\": \"SubUndoItem Deleted from history successfully\",\n    \"status\": 200,\n    \"data\": {\n        \"n\": 1,\n        \"ok\": 1\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/subItemUndoroute.js",
    "groupTitle": "subUndoItem",
    "name": "PostApiV1SubundoitemSubitemidDelete"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "api for  Sign-In.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"Failed To Find User Details\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "\n\n{\n    \"error\": true,\n    \"message\": \"No User Details Found\",\n    \"status\": 404,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersLogin"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/userId/details",
    "title": "api for  User Details.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"User Details Found\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersUseridDetails"
  },
  {
    "group": "users",
    "version": "1.0.0",
    "type": "post",
    "url": "/api/v1/users/view/all",
    "title": "api for getting All Users.",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error status, message, http status code, data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n    \"message\": \"Login Successful\",\n    \"status\": 200,\n    \"data\": {\n        \"authToken\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RpZCI6IlhuNnJOQ0xORyIsImlhdCI6MTU4OTU0MjUwNjE3MywiZXhwIjoxNTg5NjI4OTA2LCJzdWIiOiJhdXRoVG9rZW4iLCJpc3MiOiJlZENoYXQiLCJkYXRhIjp7ImZyaWVuZHMiOlt7ImZyaWVuZElkIjoiOFU2MnBQYXVZIiwiZnJpZW5kTmFtZSI6Ik5ldyBVc2VyIHVzZXIgU3VybmFtZSJ9XSwicmVxdWVzdHMiOltdLCJ1c2VyVmVyaWZpY2F0aW9uU3RhdHVzIjp0cnVlLCJtb2JpbGVOdW1iZXIiOiIwIiwiZW1haWwiOiJha3NhamphbjI4MkBnbWFpbC5jb20iLCJsYXN0TmFtZSI6IlNhamphbiIsImZpcnN0TmFtZSI6IkFraGVlbCIsInVzZXJJZCI6ImNxdTlaeTV1aSJ9fQ.qPkxyq7QjBWKZTwT2QmB8aJEVxW_j9yuXmIWcJBiToM\",\n        \"userDetails\": {\n            \"friends\": [\n                {\n                    \"friendId\": \"8U62pPauY\",\n                    \"friendName\": \"New User user Surname\"\n                }\n            ],\n            \"requests\": [],\n            \"userVerificationStatus\": true,\n            \"mobileNumber\": \"AU 618296731080\",\n            \"email\": \"aksajjan282@gmail.com\",\n            \"lastName\": \"Sajjan\",\n            \"firstName\": \"Akheel\",\n            \"userId\": \"cqu9Zy5ui\"\n        }\n    }\n}",
          "type": "object"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users",
    "name": "PostApiV1UsersViewAll"
  }
] });
