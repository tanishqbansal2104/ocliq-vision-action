const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 bg-muted/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Ocliq</h3>
            <p className="text-sm text-muted-foreground">
              When Cameras Start Understanding.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Ocliq. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
