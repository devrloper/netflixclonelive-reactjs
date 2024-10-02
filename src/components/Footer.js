// Init
import React from 'react';

// Component
export default function Footer() {
  return (
    <div>
        <div className='row row1'>
        <div class="col-xl-3 col-sm-12 "className='foot'>
            <ul >
                <li><i class="fa-brands fa-facebook-f"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-youtube"></i></li>
                <li>Questions?</li>
                <li>FAQ</li>
                <li>Legal</li>
                <li><button className='btnn border 0'>Service Code</button></li>
                <li>+123478767</li>
            </ul>
            </div>
            <div class="col-xl-3  col-sm-12"className='foot'>
            <ul>
                <li></li>
            <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
            </ul>
            </div>
            <div class="col-xl-3 col-sm-12"className='foot'>
            <ul>
            <li></li>
            <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
            </div>
            <div class="col-xl-3  col-sm-12"className='foot'>
            <ul>
            <li></li>
            <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Contact Us</li>
            </ul>
            </div>
        </div>
    </div>
  );
}