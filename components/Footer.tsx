import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function Footer({}: Props) {
  return (
   

    <footer className="p- bg-orange-400 rounded-lg shadow p-6 md:flex md:items-center md:justify-between md:p-6 dark:bg-orange-400">
        <span className="text-sm text-white sm:text-center dark:text-white">© 2022 <a href="https://mukabaw.com/" className="hover:underline">Saw</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-white dark:text-white sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Artists</a>
            </li>
        </ul>
    </footer>


  )
}

export default Footer