exports['smartx variant tsoa cli should infer number type from scalar type 1'] = {
  properties: {
    float: {
      type: 'number',
      format: 'double',
    },
    int: {
      type: 'integer',
      format: 'int32',
    },
    long: {
      type: 'integer',
      format: 'int64',
    },
  },
  required: ['float', 'int', 'long'],
  type: 'object',
};

exports['smartx variant tsoa cli should infer number type from scalar type 2'] = {
  properties: {
    float: {
      type: 'number',
      format: 'double',
    },
    int: {
      type: 'integer',
      format: 'int32',
    },
    long: {
      type: 'integer',
      format: 'int64',
    },
  },
  required: ['float', 'int', 'long'],
  type: 'object',
};

exports['smartx variant tsoa cli should generate nullable ref 1'] = {
  properties: {
    nullableNullableRefAlias: {
      allOf: [
        {
          $ref: '#/definitions/NullableRefAlias',
        },
        {
          'x-nullable': true,
        },
      ],
    },
    nullableRefAlias: {
      $ref: '#/definitions/NullableRefAlias',
    },
    nullableRef: {
      allOf: [
        {
          $ref: '#/definitions/Ref',
        },
        {
          'x-nullable': true,
        },
      ],
    },
    ref: {
      $ref: '#/definitions/Ref',
    },
  },
  required: ['nullableRefAlias', 'ref'],
  type: 'object',
};

exports['smartx variant tsoa cli should generate nullable ref 2'] = {
  properties: {
    nullableNullableRefAlias: {
      $ref: '#/components/schemas/NullableRefAlias',
    },
    nullableRefAlias: {
      $ref: '#/components/schemas/NullableRefAlias',
    },
    nullableRef: {
      $ref: '#/components/schemas/Ref',
    },
    ref: {
      $ref: '#/components/schemas/Ref',
    },
  },
  required: ['nullableRefAlias', 'ref'],
  type: 'object',
};

exports['smartx variant tsoa cli should generate string type for @formField 1'] = {
  post: {
    operationId: 'FormField',
    produces: ['application/json'],
    responses: {
      200: {
        description: 'Ok',
        schema: {
          type: 'string',
        },
      },
      400: {
        description: '',
        schema: {
          type: 'string',
        },
      },
    },
    consumes: ['multipart/form-data'],
    tags: ['Test'],
    security: [],
    parameters: [
      {
        in: 'formData',
        name: 'string',
        required: true,
        type: 'string',
      },
      {
        in: 'formData',
        name: 'number',
        required: true,
        type: 'string',
      },
      {
        in: 'formData',
        name: 'ref',
        required: true,
        type: 'string',
      },
      {
        in: 'formData',
        name: 'file',
        required: false,
        type: 'file',
      },
    ],
  },
};

exports['smartx variant tsoa cli should generate string type for @formField 2'] = {
  post: {
    operationId: 'FormField',
    responses: {
      200: {
        description: 'Ok',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
      400: {
        description: '',
        content: {
          'application/json': {
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
    tags: ['Test'],
    security: [],
    parameters: [],
    requestBody: {
      required: true,
      content: {
        'multipart/form-data': {
          schema: {
            type: 'object',
            properties: {
              string: {
                type: 'string',
              },
              number: {
                type: 'string',
              },
              ref: {
                type: 'string',
              },
              file: {
                type: 'string',
                format: 'binary',
              },
            },
            required: ['string', 'number', 'ref'],
          },
        },
      },
    },
  },
};
