export const getFromSpec2 = (type: 'definitions' | 'paths', name: string) => {
  const spec = require('./fixture/dist/swagger2.0.json');
  switch (type) {
    case 'definitions':
      return spec.definitions[name];
    case 'paths':
      return spec.paths['/' + name];
  }
};

export const getFromSpec3 = (type: 'schemas' | 'paths', name: string) => {
  const spec = require('./fixture/dist/swagger3.0.json');
  switch (type) {
    case 'schemas':
      return spec.components.schemas[name];
    case 'paths':
      return spec.paths['/' + name];
  }
};
