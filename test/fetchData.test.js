import { expect } from 'chai';
import { fetchStories, fetchItem } from '../scripts/fetchData.js';
import sinon from 'sinon';

describe('Fetch Data', () => {
  let fetchStub;

  beforeEach(() => {
    fetchStub = sinon.stub(global, 'fetch');
  });

  afterEach(() => {
    fetchStub.restore();
  });

  it('should fetch data successfully', async () => {
    const mockData = { key: 'value' };
    global.fetch = sinon.stub().resolves({
      ok: true,
      json: async () => [1, 2, 3],
    });
    sinon.stub(fetchItem).resolves(mockData);
  
    const result = await fetchStories('stories', 0);
    expect(result).to.deep.equal([mockData, mockData, mockData]);
    expect(global.fetch.calledOnce).to.be.true;
    expect(global.fetch.calledWith(`${API_BASE_URL}/newstories.json`)).to.be.true;
  
    fetchItem.restore();
  });
  it('should handle fetch errors', async () => {
    fetchStub.rejects(new Error('Network error'));

    try {
      await fetchStories('https://api.example.com/data');
    } catch (error) {
      expect(error.message).to.equal('Network error');
    }
  });
});
