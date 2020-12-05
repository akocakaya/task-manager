import { Request, Response } from 'express';
import taskModel from '../entity/task.model';
import { createTask } from './task.controller';

jest.mock('../entity/task.model');
jest.mock('express');

describe('Modules > Task > Controller > Task Controller', () => {
  describe('Create Task', () => {
    it('should call task model with text and author', () => {
      // Given
      const req = { body: { text: 'testText', author: 'testAuthor' } } as Request;
      const res = ({
        status: jest.fn().mockImplementationOnce(() => ({
          send: jest.fn().mockImplementationOnce(() => ({})),
        })),
      } as unknown) as Response;

      // When
      createTask(req, res);

      // Then
      expect(taskModel).toBeCalledWith(req.body);
    });
  });
});
