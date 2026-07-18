import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error('Koffera website runtime error', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <main className="runtime-error" role="alert">
          <div className="runtime-error__card">
            <span className="eyebrow">Website error</span>
            <h1>This page could not load correctly.</h1>
            <p>Please refresh the page. If the problem continues, the technical error is available in the browser console.</p>
            <button className="button button--dark" type="button" onClick={() => window.location.reload()}>
              Refresh page
            </button>
          </div>
        </main>
      );
    }

    return this.props.children;
  }
}
