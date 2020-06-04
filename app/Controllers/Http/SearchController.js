"use strict";

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const SearchService = require("../../Services/SearchService");

/**
 * Resourceful controller for interacting with search
 */
class SearchController {
  /**
   * Display a single subject.
   * GET search/:value
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async search({ params, request, response, view }) {
    var searchService = new SearchService();
    var result = await searchService.search({ value: params.value });

    return response.json(result);
  }
}

module.exports = SearchController;
