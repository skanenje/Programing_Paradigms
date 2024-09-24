import { JSDOM } from 'jsdom';
import chai from 'chai';

const dom = new JSDOM('<!doctype html><html><body></body></html>');
global.window = Object.create(dom.window, {
  navigator: {
    value: {
      userAgent: 'node.js'
    }
  }
});
global.document = dom.window.document;

global.expect = chai.expect;