# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list


## Crear un TodoMVC con TypeScript

- [ ] Inicializar proyecto con Vite
- [ ] Añadir linter para TypeScript + React
- [ ] Añadir estilos del TodoMVC
- [ ] Listar todos los TODOs
- [ ] Poder borrar un TODO
- [ ] Marcar TODO como completado
- [ ] Añadir forma de filtrar TODOs (Footer)
- [ ] Mostrar número de TODOs pendientes (Footer)
- [ ] Añadir forma de borrar todos los TODOs completados
- [ ] Crear Header con input (Header)
- [ ] Crear un TODO (Header)
- [ ] Poder editar el texto de un TODO (Doble click)
- [ ] Añadir animaciones con AutoAnimate
- [ ] Pasar a Reducer
- [ ] Sincronizar con el backend
