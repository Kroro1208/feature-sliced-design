# React + TypeScript + Vite with Feature Sliced Design

This template provides a React application built with Feature Sliced Design (FSD) architecture, using Vite for build tooling and TypeScript for type safety.

## Feature Sliced Design Architecture

This project follows the [Feature Sliced Design](https://speakerdeck.com/osakatechlab/hurontoendonodeirekutorigou-cheng-dousiteru-feature-sliced-design-dao-ru-ti-yan-tan) methodology, which provides a standardized way to organize frontend projects.

### Project Structure

```
src/
├── app/              # アプリケーション層
├── pages/            # ページ層
├── widgets/          # ウィジェット層
├── features/         # フィーチャー層
├── entities/         # エンティティ層
└── shared/           # 共有層
```

### Layer Descriptions

#### 🔧 **app/** - Application Layer

アプリケーション全体の設定とプロバイダーを管理します。

**含まれるファイル：**

- `App.tsx` - メインアプリケーションコンポーネント
- `providers/` - Context providers、Router設定など
  - `router/` - ルーティング設定
    - `routerConfig.tsx` - ルート定義
    - `ui/AppRouter.tsx` - ルーターコンポーネント
- `styles/` - グローバルスタイル
  - `index.scss` - アプリケーション全体のスタイル

**例：**

```typescript
// app/App.tsx
import { AppRouter } from './providers/router';
import './styles/index.scss';

export function App() {
  return <AppRouter />;
}
```

#### 📄 **pages/** - Pages Layer

アプリケーションのページ（ルート）を定義します。

**含まれるファイル：**

- 各ページのディレクトリ（例：`HomePage/`, `ProfilePage/`）
- `index.ts` - エクスポート用のbarrel file
- `ui/` - ページのUIコンポーネント
- `model/` - ページ固有のロジック（状態管理など）

**例：**

```typescript
// pages/HomePage/ui/HomePage.tsx
import { Welcome } from 'widgets/Welcome';
import { ProductList } from 'widgets/ProductList';

export const HomePage = () => (
  <div>
    <Welcome />
    <ProductList />
  </div>
);
```

#### 🧩 **widgets/** - Widgets Layer

複数のfeaturesとentitiesを組み合わせた大きなUIブロックです。

**含まれるファイル：**

- ウィジェット名のディレクトリ（例：`Header/`, `Sidebar/`）
- `ui/` - ウィジェットのUIコンポーネント
- `model/` - ウィジェット固有のロジック
- `api/` - ウィジェット固有のAPIクエリ
- `index.ts` - エクスポート用のbarrel file

**例：**

```typescript
// widgets/Header/ui/Header.tsx
import { Logo } from 'shared/ui/Logo';
import { UserMenu } from 'features/UserMenu';
import { SearchBar } from 'features/SearchBar';

export const Header = () => (
  <header>
    <Logo />
    <SearchBar />
    <UserMenu />
  </header>
);
```

#### ⚡ **features/** - Features Layer

特定のビジネス価値を提供する機能を実装します。

**含まれるファイル：**

- 機能名のディレクトリ（例：`AuthByUsername/`, `AddToCart/`）
- `ui/` - フィーチャーのUIコンポーネント
- `model/` - 状態管理（stores, actions, selectors）
- `api/` - APIリクエスト
- `lib/` - フィーチャー固有のユーティリティ
- `index.ts` - パブリックAPIの定義

**例：**

```typescript
// features/AuthByUsername/ui/LoginForm.tsx
import { Button } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useLoginMutation } from '../api/authApi';

export const LoginForm = () => {
  const [login] = useLoginMutation();

  return (
    <form onSubmit={handleSubmit}>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </form>
  );
};
```

#### 🏢 **entities/** - Entities Layer

ビジネスエンティティ（ドメインモデル）を管理します。

**含まれるファイル：**

- エンティティ名のディレクトリ（例：`User/`, `Product/`）
- `ui/` - エンティティのUIコンポーネント
- `model/` - エンティティの型定義、ストア
- `api/` - エンティティ関連のAPIクエリ
- `lib/` - エンティティ固有のユーティリティ
- `index.ts` - パブリックAPIの定義

**例：**

```typescript
// entities/User/model/types.ts
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
}

// entities/User/ui/UserCard.tsx
import { User } from '../model/types';

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => (
  <div className="user-card">
    <img src={user.avatar} alt={user.username} />
    <h3>{user.username}</h3>
    <p>{user.email}</p>
  </div>
);
```

#### 🔄 **shared/** - Shared Layer

アプリケーション全体で再利用可能なコードを含みます。

**含まれるファイル：**

- `ui/` - 共通UIコンポーネント（Button, Input, Modalなど）
- `lib/` - ユーティリティ関数、ヘルパー
- `api/` - 基本的なAPI設定（axios instance、base URLなど）
- `config/` - 設定ファイル
- `constants/` - 定数
- `types/` - 共通の型定義

**例：**

```typescript
// shared/ui/Button/Button.tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  ...props
}: ButtonProps) => (
  <button
    className={`btn btn--${variant} btn--${size}`}
    {...props}
  >
    {children}
  </button>
);
```

### Import Rules

FSDでは**依存関係の方向**が重要です：

```
app → pages → widgets → features → entities → shared
```

- **上位層は下位層をimportできる**
- **下位層は上位層をimportしてはいけない**
- **同じ層内でのimportは避ける**

**正しい例：**

```typescript
// ✅ pages layer from widgets layer
import { Header } from 'widgets/Header';

// ✅ features layer from entities layer
import { User } from 'entities/User';

// ✅ Any layer from shared layer
import { Button } from 'shared/ui/Button';
```

**間違った例：**

```typescript
// ❌ shared layer from features layer
import { LoginForm } from 'features/Auth'; // shared内でこれは禁止

// ❌ entities layer from features layer
import { AddToCart } from 'features/Cart'; // entities内でこれは禁止
```

### Barrel Exports

各スライス（機能のディレクトリ）は `index.ts` ファイルでパブリックAPIを定義します：

```typescript
// features/Auth/index.ts
export { LoginForm } from './ui/LoginForm';
export { useAuth } from './model/useAuth';
export type { AuthState } from './model/types';

// Don't export internal implementation
// export { validatePassword } from './lib/validation'; // これは内部実装なのでexportしない
```

### Development Scripts

```bash
npm run dev      # 開発サーバー起動
npm run build    # プロダクションビルド
npm run lint     # ESLintチェック
npm run format   # Prettierでコードフォーマット
npm run preview  # ビルド結果のプレビュー
```

## Benefits of Feature Sliced Design

1. **Scalability** - 大規模なアプリケーションでも構造が明確
2. **Maintainability** - 機能ごとに分離されているため保守が容易
3. **Team Collaboration** - チーム間での役割分担が明確
4. **Reusability** - 下位層のコンポーネントは上位層で再利用可能
5. **Testing** - 各層が独立しているためテストが書きやすい

詳細については [Feature Sliced Design公式ドキュメント](https://feature-sliced.design/) を参照してください。

## Vite Configuration

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
