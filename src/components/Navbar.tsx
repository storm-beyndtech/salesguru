import { useState, useEffect } from 'react';
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline';
import { Dialog, Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { contextData } from '@/context/AuthContext';
import { PiUserLight } from 'react-icons/pi';

export interface MenuGroup {
  name: string;
  href: string;
}

const list = [
  { name: 'Home', href: '/' },
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

function MenuList({ items }: { items: MenuGroup[] }) {
  const handleNavbg = () => {
    const nav = document.getElementById('navBar');
    if (nav) {
      if (window.scrollY >= 500) nav.style.backgroundColor = 'rgb(17 24 39)';
      else {
        nav.style.backgroundColor = '';
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleNavbg);
  }, []);

  return (
    <div
      className={`flex items-center justify-center max-lg:flex-col max-lg:mt-20 gap-10`}
    >
      {items.map((listItem, i) => (
        <Link
          to={listItem.href}
          key={i}
          className="inline-flex items-center gap-x-1 text-sm font-medium leading-6 text-gray-100 max-lg:text-xl"
        >
          <span>{listItem.name}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user } = contextData();

  return (
    <header
      className="fixed w-full top-0 left-0 z-40 backdrop-blur-md"
      id="navBar"
    >
      <nav className="max-ctn flex items-center justify-between p-5 py-6 gap-20">
        <Link to="/" className="flex items-center gap-1">
          <img className="h-10 w-auto" src={logo} alt="logo" />
        </Link>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <button
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-9 w-9" />
          </button>
        </div>

        {/* Desktop Menu */}
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <MenuList items={list} />
        </Popover.Group>

        {user ? (
          <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-6">
            <Link
              to="/dashboard"
              className="border border-white/20 px-4 py-2 !rounded-lg text-sm font-medium text-gray-100 flex items-center gap-2"
            >
              Dashboard{' '}
              <span className="ml-3">
                <PiUserLight />
              </span>
            </Link>
          </div>
        ) : (
          <div className="hidden lg:flex lg:justify-end lg:items-center lg:gap-6">
            <Link
              to="/register"
              className="border border-white/20 px-4 py-2 !rounded-lg text-sm font-medium text-gray-100 flex items-center gap-2"
            >
              Register{' '}
              <span className="ml-3">
                <PiUserLight />
              </span>
            </Link>

            <Link
              to="/login"
              className="text-sm font-medium leading-6 text-gray-100"
            >
              Log in{' '}
              <span className="ml-3" aria-hidden="true">
                &rarr;
              </span>
            </Link>
          </div>
        )}
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <div className="fixed inset-0 z-10"></div>
        <Dialog.Panel className="fixed flex flex-col gap-5 inset-y-0 right-0 z-[1000] w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              className="-m-2.5 rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XCircleIcon className="h-14 w-14" aria-hidden="true" />
            </button>
          </div>
          
          <MenuList items={list} />

          {user ? (
            <div className="flex flex-1 justify-center items-center gap-6">
              <Link
                to="/dashboard"
                className="border border-white/20 px-4 py-2 !rounded-lg text-lg font-medium text-gray-100 flex items-center gap-2"
              >
                Dashboard{' '}
                <span className="ml-3">
                  <PiUserLight />
                </span>
              </Link>
            </div>
          ) : (
            <div className="flex flex-1 justify-end items-center gap-6">
              <Link
                to="/register"
                className="border border-white/20 px-4 py-2 !rounded-lg text-lg font-medium text-gray-100 flex items-center gap-2"
              >
                Register{' '}
                <span className="ml-3">
                  <PiUserLight />
                </span>
              </Link>

              <Link
                to="/login"
                className="text-lg font-medium leading-6 text-gray-100"
              >
                Log in{' '}
                <span className="ml-3" aria-hidden="true">
                  &rarr;
                </span>
              </Link>
            </div>
          )}
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
