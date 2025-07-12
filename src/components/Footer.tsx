export const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-light">Sarah J. Mitchell, Attorney at Law</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm opacity-90">
            <p>1425 Corporate Center Drive, Suite 240, Springfield, IL 62701</p>
            <p>(217) 555-0123</p>
            <p>sarah@mitchelllaw.com</p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-4 mt-6">
            <p className="text-xs opacity-75">
              © 2024 Mitchell Law Offices. All rights reserved. | 
              Attorney advertising. Prior results do not guarantee a similar outcome.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};