import { createCircle } from './mouse-trap';
import { JSDOM } from 'jsdom';

describe('createCircle', () => {
    let dom;
    let document;

    beforeEach(() => {
        dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
        document = dom.window.document;
        global.document = document;
    });

    afterEach(() => {
        document.body.innerHTML = '';
    });
});
