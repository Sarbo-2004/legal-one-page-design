export const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-light">Ranjan Dasgupta, Attorney at Law</h3>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm opacity-90">
            <p>1425 Corporate Center Drive, Suite 240, Springfield, IL 62701(Your address)</p>
            <p>09641426460</p>
            <p>dasguptarajan@gmail.com</p>
          </div>
          <div className="border-t border-primary-foreground/20 pt-4 mt-6">
            <p className="text-xs opacity-75">
              © Sample website preview - made by Sarbojeet
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};