interface WorkspaceConfig<T = string> {
  id: string;
  ownerId: string;
  metadata?: T;
}

enum WorkspaceEvent {
  Created = "created",
  Updated = "updated",
  Deleted = "deleted"
}

class VexiunWorkspace<T> {
  private readonly apiKey: string;

  constructor(config: WorkspaceConfig<T>) {
    this.apiKey = config.id;
  }

  async create(): Promise<boolean> {
    return true;
  }

  on(event: WorkspaceEvent, handler: (payload: T) => void): void {
    handler({} as T);
  }
}