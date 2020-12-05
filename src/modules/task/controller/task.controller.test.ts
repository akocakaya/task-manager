import express from 'express';
const router = express.Router();
import taskModel from '../entity/task.model';
jest.mock('../entity/task.model');

describe('Modules > Task > Repository > Task Repository', () => {
  it('should call task model with texst and author', () => {
    // Given
    const req = { body: { text: 'testText', author: 'testAuthor' } };
    const res = { status: { send: jest.fn() } };

    // When

    // Then
  });
});
