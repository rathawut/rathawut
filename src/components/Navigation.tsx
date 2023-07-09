'use client';
import { Fragment } from 'react';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';

const Navigation = () => {
  return (
    <nav className="relative sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3">
      <Menu as="div" className="relative inline-block text-left">
        {({ open }) => (
          <>
            <Menu.Button className="sm:hidden p-2">
              <AiOutlineMenu />
            </Menu.Button>
            <Transition
              show={open}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                static
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-gray-700'
                      )}
                    >
                      Home
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      href="/about"
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-gray-700'
                      )}
                    >
                      About Me
                    </Link>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </>
        )}
      </Menu>
      <div className="sm:flex hidden">
        <Link href="/" className="px-4 py-2 text-gray-700">
          Home
        </Link>
        <Link href="/about" className="px-4 py-2 text-gray-700">
          About Me
        </Link>
      </div>
    </nav>
  );
};

// This function adds different styles depending on whether the condition is true or not
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default Navigation;
