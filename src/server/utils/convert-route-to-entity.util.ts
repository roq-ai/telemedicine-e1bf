const mapping: Record<string, string> = {
  appointments: 'appointment',
  'medical-histories': 'medical_history',
  organizations: 'organization',
  profiles: 'profile',
  schedules: 'schedule',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
