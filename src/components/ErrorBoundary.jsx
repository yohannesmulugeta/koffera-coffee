import React from 'react';

export default class ErrorBoundary extends React.Component{
  constructor(props){super(props);this.state={error:null}}
  static getDerivedStateFromError(error){return{error}}
  componentDidCatch(error,info){console.error('Koffera website runtime error',error,info)}
  render(){if(this.state.error){return <main className="runtime-error"><div><span>Website error</span><h1>This page could not load correctly.</h1><p>Please refresh the page. The technical error has been shown in the browser console for diagnosis.</p><button onClick={()=>window.location.reload()}>Refresh page</button></div></main>}return this.props.children}
}
