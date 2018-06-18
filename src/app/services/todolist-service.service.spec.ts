import { TestBed, inject } from '@angular/core/testing';

import { TodolistServiceService } from './todolist-service.service';

describe('TodolistServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodolistServiceService]
    });
  });

  it('should be created', inject([TodolistServiceService], (service: TodolistServiceService) => {
    expect(service).toBeTruthy();
  }));
});
