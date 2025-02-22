```javascript
// pages/index.js

export default function Home() {
  // Solution: Added error handling or fixed the root cause
  try {
    // Code that was causing the error
  } catch (error) {
    console.error('An error occurred:', error);
    // Fallback UI or error message
    return <div>An error occurred. Please try again later.</div>;
  }

  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
    </div>
  );
}
```