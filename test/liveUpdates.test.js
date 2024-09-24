import { expect } from 'chai';
import { initializeLiveUpdates, stopLiveUpdates } from '../scripts/liveUpdates.js';
import sinon from 'sinon';

describe('Live Updates', () => {
  let clock;

  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });

  afterEach(() => {
    clock.restore();
    stopLiveUpdates();
  });

  it('should start live updates', () => {
    const updateCallback = sinon.spy();
    initializeLiveUpdates(updateCallback, 5000);

    clock.tick(5000);
    expect(updateCallback.calledOnce).to.be.true;

    clock.tick(5000);
    expect(updateCallback.calledTwice).to.be.true;
  });

  it('should stop live updates', () => {
    const updateCallback = sinon.spy();
    initializeLiveUpdates(updateCallback, 5000);

    clock.tick(5000);
    expect(updateCallback.calledOnce).to.be.true;

    stopLiveUpdates();

    clock.tick(5000);
    expect(updateCallback.calledOnce).to.be.true; // Still only called once
  });
});