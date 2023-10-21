
const Footer = () => {
    return (
        <div className="mt-8">
<footer className="footer w-full p-10 bg-base-200 dark:bg-gray-900 text-base-content">
<nav>
    <header className="footer-title dark:text-white">Services</header> 
    <a className="link link-hover  dark:text-white ">Branding</a> 
    <a className="link link-hover dark:text-white">Design</a> 
    <a className="link link-hover dark:text-white">Marketing</a> 
    <a className="link link-hover dark:text-white">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title dark:text-white">Company</header> 
    <a className="link link-hover dark:text-white">About us</a> 
    <a className="link link-hover dark:text-white">Contact</a> 
    <a className="link link-hover dark:text-white">Jobs</a> 
    <a className="link link-hover dark:text-white">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title dark:text-white">Legal</header> 
    <a className="link link-hover dark:text-white">Terms of use</a> 
    <a className="link link-hover dark:text-white">Privacy policy</a> 
    <a className="link link-hover dark:text-white">Cookie policy</a>
  </nav> 
  <form>
    <header className="footer-title dark:text-white">Newsletter</header> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text dark:text-white">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
        </div>
    );
};

export default Footer;