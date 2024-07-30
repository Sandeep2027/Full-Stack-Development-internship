import React from 'react';

function SignUpLoginModal() {
  return (
    <div className="modal">
      <h2>Sign Up / Login</h2>
      <form>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SignUpLoginModal;
