function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - Created by Zach Schwartz for The Northern Colorado Grotto
        </p>
      </aside>
    </footer>
  );
}

export default Footer;
