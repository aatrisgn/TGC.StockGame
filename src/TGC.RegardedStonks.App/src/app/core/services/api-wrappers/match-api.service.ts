import { computed, inject, Injectable, resource } from '@angular/core';
import { createUntypedNumber } from '@microsoft/kiota-abstractions';
import { IStockMatchEntity } from '../../../auto_generated/client/models';
import { API_CLIENT } from '../../models/api-client.token';

@Injectable({
  providedIn: 'root'
})
export class MatchApiService {
  private readonly apiClient = inject(API_CLIENT);

  private readonly matchesResource = resource({
    loader: () => this.apiClient.api.matches.get()
  });

  readonly matches = computed<IStockMatchEntity[]>(() => this.matchesResource.value()?.matches ?? []);
  readonly isLoading = computed(() => this.matchesResource.isLoading());

  refresh(): void {
    this.matchesResource.reload();
  }

  async createMatch(name: string, startingCapital: number): Promise<void> {
    await this.apiClient.api.matches.post({
      name,
      startingCapital: createUntypedNumber(startingCapital)
    });
    this.refresh();
  }
}
