import ScrollToTop from '../ScrollToTop';

export default function ScrollToTopExample() {
  return (
    <div className="h-[200vh] bg-gradient-to-b from-black to-gray-900 p-8">
      <p className="text-white text-center">Scroll down to see the button appear</p>
      <ScrollToTop />
    </div>
  );
}
