import { UserUpdateInfo, UserUpdatePassword } from '../../src'

export const UserMock = {
  data: {
    id: 'user-zzAm6GKzCMMTB5dR',
    type: 'users',
    attributes: {
      username: 'api-org-mijailr',
      'is-service-account': true,
      'avatar-url': 'https://www.gravatar.com/avatar/90c3d91dc324b50a2c39b88e953f14e9?s=100&d=mm',
      password: null,
      'enterprise-support': false,
      'is-site-admin': false,
      'is-sso-login': false,
      'two-factor': { enabled: false, verified: false },
      email: 'api-org-mijailr@hashicorp.com',
      'unconfirmed-email': null,
      'has-git-hub-app-token': false,
      'is-confirmed': true,
      'onboarding-status': null,
      'is-sudo': false,
      permissions: {
        'can-create-organizations': false,
        'can-change-email': true,
        'can-change-username': true,
        'can-manage-user-tokens': false,
      },
    },
    relationships: { 'authentication-tokens': { links: [Object] } },
    links: { self: '/api/v2/users/user-zzAm6GKzCMMTB5dR' },
  },
}

export const UserPasswordUpdateMock: UserUpdatePassword = {
  data: {
    type: 'users',
    attributes: {
      current_password: 'current-password',
      password: 'new-password',
      password_confirmation: 'new-password',
    },
  },
}

export const UserDetailsUpdateMock: UserUpdateInfo = {
  data: {
    type: 'users',
    attributes: {
      email: 'user@example.com',
      username: 'username',
    },
  },
}
