import React from 'react';

// I wrote this one as a stateless functional component since we won't be needing
// this component other than rendering the footer within each component
const Footer = () => {
  return (
    <footer>
      <nav class="navbar navbar-light bg-light sticky-bottom">© Lockerroom Buzz: 2019-2020</nav>
    </footer>
  )
}

export default Footer;
