import React from 'react';
import { __ } from "@wordpress/i18n";

const Divider = () => {
  return (
    <div className='section-divider-container'>{__("Section Divider", "notifima")}</div>
  )
}

export default Divider