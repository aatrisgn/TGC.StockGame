import { computed, inject, Injectable, resource, signal } from '@angular/core';
import { API_CLIENT } from '../../models/api-client.token';

@Injectable({
  providedIn: 'root'
})
export class MatchDetailApiService {
  private readonly apiClient = inject(API_CLIENT);

  private readonly matchId = signal<string | undefined>(undefined);

  private readonly matchResource = resource({
    params: this.matchId,
    loader: ({ params: id }) => this.apiClient.api.matches.byId(id).get()
  });

  readonly match = computed(() => this.matchResource.value()?.match);
  readonly rawResponse = this.matchResource.value;
  readonly isLoading = computed(() => this.matchResource.isLoading());

  setMatchId(id: string | undefined): void {
    this.matchId.set(id);
  }
}
