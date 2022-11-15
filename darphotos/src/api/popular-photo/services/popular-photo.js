'use strict';

/**
 * popular-photo service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::popular-photo.popular-photo');
