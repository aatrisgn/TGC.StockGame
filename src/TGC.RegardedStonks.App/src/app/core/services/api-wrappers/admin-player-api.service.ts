import { computed, inject, Injectable, resource } from '@angular/core';
import { IPlayerEntity } from '../../../auto_generated/client/models';
import { API_CLIENT } from '../../models/api-client.token';

@Injectable({
  providedIn: 'root'
})
export class AdminPlayerApiService {
  private readonly apiClient = inject(API_CLIENT);

  private readonly playersResource = resource({
    loader: () => this.apiClient.api.admin.players.get()
  });

  readonly players = computed<IPlayerEntity[]>(() => this.playersResource.value()?.players ?? []);
  readonly isLoading = computed(() => this.playersResource.isLoading());

  refresh(): void {
    this.playersResource.reload();
  }

  async addPlayer(oid: string, userName: string): Promise<void> {
    await this.apiClient.api.admin.players.post({ oid, userName });
    this.refresh();
  }
}
