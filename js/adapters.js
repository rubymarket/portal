// Integrations are intentionally represented by adapters. Production credentials
// and direct database connections must never be placed in this browser client.
export class IdentityAdapter {
  async signIn() {
    return { mode: "demo", subject: "RM-10482", authenticated: true };
  }
  async signOut() { return true; }
}

export class EmployeeDataAdapter {
  async getProfile() {
    return { source: "Демонстрационные данные", updatedAt: new Date().toISOString(), profile: null };
  }
}

export class IntegrationGatewayAdapter {
  async getStatus() { return { connected: false, mode: "demo", message: "Интеграции подключаются ИТ через промежуточный слой." }; }
  async publishLearningEvent(_event) { return { accepted: false, mode: "demo" }; }
}

export const adapters = {
  identity: new IdentityAdapter(),
  employeeData: new EmployeeDataAdapter(),
  gateway: new IntegrationGatewayAdapter(),
};
