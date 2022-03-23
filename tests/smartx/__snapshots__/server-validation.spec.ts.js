exports['smartx variant tsoa runtime should throw error when get invalid form ref field 1'] = {
  status: 400,
  text: '{"message":"{\\"fields\\":{\\"ref\\":{\\"message\\":\\"\\\\\\"C\\\\\\" is an excess property and therefore is not allowed\\",\\"value\\":{\\"C\\":\\"C\\"}},\\"ref.A\\":{\\"message\\":\\"\'A\' is required\\"}}}"}',
  method: 'POST',
  path: '/formField',
};
