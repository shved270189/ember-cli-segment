import { instanceInitialize } from 'ember-cli-segment/initializer';

export default {
  name: 'segment',
  initialize: function(instance) {
    instanceInitialize(instance.__container__);
  }
};
