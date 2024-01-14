import React, { ErrorInfo, ReactNode, Suspense } from "react";
import { ErrorPage } from "Pages/ErrorPage";

interface IErrorBoundaryProps {
  children: ReactNode;
}

interface IErrorBoundaryState {
  isError: boolean;
}

export class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { isError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
    console.log(error, errorInfo);
  }

  static getDerivedStateFromError(error: Error) {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { isError: true }; // меняет стейт
  }

  render() {
    console.log(this.state, "!");
    if (this.state.isError) {
      // Можно отрендерить запасной UI произвольного вида
      return (
        <Suspense fallback="...">
          <ErrorPage />
        </Suspense>
      );
    }

    return this.props.children;
  }
}

//Не ловит ошибки в:

// обработчиках событий;
// асинхронном коде (например колбэках из setTimeout или requestAnimationFrame);
// серверном рендеринге (Server-side rendering);
// самом предохранителе (а не в его дочерних компонентах).
