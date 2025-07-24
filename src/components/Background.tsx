import React, { useEffect, useState } from 'react';
import bg from '../images/mist.gif';

export default function Background() {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-50 blur-md overflow-hidden"
    >
      <img
        src={bg}
        alt="bg"
        className="w-full h-full object-cover"
      />
    </div>
  );
}