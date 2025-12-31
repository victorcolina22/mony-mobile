# AGENTS.md

This file contains guidelines and commands for agentic coding agents working in
the Mony mobile app repository.

## Project Structure

This is a monorepo using Turbo with:

- `apps/api/` - NestJS backend API
- `apps/mobile/` - React Native/Expo mobile app
- `packages/types/` - Shared TypeScript types

## Development Commands

### Root Level Commands

```bash
# Development (runs both apps)
npm run dev

# Build all packages
npm run build

# Lint all packages
npm run lint

# Test all packages
npm run test

# Format code
npm run format

# Individual app development
npm run mobile:dev
npm run api:dev
```

### API Commands (apps/api/)

```bash
# Development with watch
npm run dev

# Build
npm run build

# Lint and fix
npm run lint

# Testing
npm run test              # Run all tests
npm run test:watch        # Run tests in watch mode
npm run test:cov          # Run with coverage
npm run test:e2e          # Run e2e tests
npm run test:debug        # Debug tests

# Single test file
npx jest path/to/test.spec.ts

# Start production
npm run start:prod
```

### Mobile Commands (apps/mobile/)

```bash
# Development
npm run dev
npm start

# Platform-specific
npm run android
npm run ios
npm run web

# Testing
npm run test              # Run tests in watch mode

# Linting
npm run lint
```

## Code Style Guidelines

### General Formatting

- Use Prettier with config from `.prettierrc`
- 2 spaces for indentation
- Single quotes for strings
- Semicolons required
- Trailing commas (ES5)
- Line width: 80 characters

### Import Organization

1. External libraries (React, React Native, etc.)
2. Internal modules (with @/ alias)
3. Relative imports
4. Types-only imports

Example:

```typescript
import React from 'react';
import { View } from 'react-native';
import { Button } from '@/components/Button';
import { AuthProvider } from './AuthProvider';
import type { User } from '@/shared/interfaces/user';
```

### TypeScript Guidelines

- Use strict mode in mobile app
- API allows `noImplicitAny: false` for flexibility
- Prefer explicit return types for public functions
- Use interfaces for object shapes, types for unions/primitives
- Use generic types where appropriate

### Naming Conventions

- **Files**: kebab-case for components, PascalCase for React components
- **Components**: PascalCase (e.g., `Button`, `SummaryCard`)
- **Functions/Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase with descriptive names
- **DTOs**: PascalCase ending with `Dto` (e.g., `LoginDto`)

### API (NestJS) Specific Guidelines

- Use decorators for validation (`@IsEmail`, `@IsNotEmpty`, etc.)
- Follow NestJS module structure: controller, service, module, entity, dto
- Use TypeORM entities with proper relationships
- Implement proper error handling with NestJS exception filters
- Use guards for authentication/authorization
- Follow RESTful conventions for endpoints

### Mobile (React Native) Specific Guidelines

- Use Expo Router for navigation
- Use Tailwind CSS via NativeWind for styling
- Use Zustand for state management
- Use TanStack Query for API calls
- Use React Hook Form for form handling
- Component structure: constants, types, then main component

### Error Handling

- **API**: Use NestJS built-in exceptions (`HttpException`,
  `BadRequestException`, etc.)
- **Mobile**: Use try-catch blocks with proper error states
- Log errors appropriately without exposing sensitive data
- Provide user-friendly error messages

### Testing Guidelines

- **API**: Use Jest with NestJS testing utilities
- **Mobile**: Use Jest with React Native Testing Library
- Test files should end with `.spec.ts` or `.test.ts`
- Aim for good coverage of business logic
- Mock external dependencies appropriately

### Git Workflow

- Use conventional commit messages
- Create feature branches from main
- Ensure all tests pass before committing
- Run linting and formatting before commits

### Security Best Practices

- Never commit secrets or API keys
- Use environment variables for configuration
- Implement proper authentication and authorization
- Validate all input data
- Use HTTPS for API calls

## Path Aliases

### Mobile App

- `@/*` maps to root of mobile app
- Use for internal imports: `@/components/Button`, `@/shared/utils`

### API

- Use relative imports within modules
- Structure imports by dependency hierarchy

## Common Patterns

### Component Structure (Mobile)

```typescript
// Imports (external, internal, relative, types)

export function ComponentName({
  prop1,
  prop2,
}: ComponentProps): React.ReactElement {
  // Hooks and state
  // Event handlers
  // Render logic
}
```

### Controller Structure (API)

```typescript
// Imports

@Controller('endpoint')
export class ControllerName {
  constructor(private readonly service: ServiceName) {}

  @Get()
  async getMethod(): Promise<ResponseType> {
    // Implementation
  }
}
```

## Running Single Tests

### API

```bash
# From apps/api/ directory
npx jest path/to/test.spec.ts
npx jest modules/auth/auth.service.spec.ts
```

### Mobile

```bash
# From apps/mobile/ directory
npm test -- path/to/test.test.tsx
npm test -- components/Button/Button.test.tsx
```

## Build Verification

Always run these commands before committing:

```bash
npm run lint
npm run test
npm run build
```

For API-specific changes, also run:

```bash
npm run test:cov
```

This ensures code quality and prevents regressions.
