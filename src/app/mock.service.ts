import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  getData(): Observable<any> {
    
    const data = [
      { name: 'dev' },
      { name: 'virat' },
      { name: 'raj' },
      { name: 'raj' },
      { name: 'virat' },
      { name: 'raj'},
      { name: 'dhoni' },
      { name: 'sunil' },
      { name: 'virat'},
      { name: 'sunil' },
      { name: 'sunil' },
      { name: 'sunil' },
      { name: 'sunil' },
      { name: 'sunil'},
      { name: 'shankar'},
      { name: 'sunil' },
      { name: 'sunil' },
      { name: 'sunil'},
      { name: 'sunil'},
      { name: 'sunil'}

    
    
    ];
    
    return of(data);
  }
}
