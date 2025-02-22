import React, { useState } from "react";
import { __ } from "@wordpress/i18n";
import "./support.scss";

const Support = () => {
  const url = "https://www.youtube.com/embed/cgfeZH5z2dM?si=3zjG13RDOSiX2m1b";
  
  const [faqs, setFaqs] = useState([
      {
          question: __("Why am I not receiving any emails when a customer subscribes for an out-of-stock product?", "notifima"),
          answer: __("Please install a plugin like Email Log and perform a test subscription.", "notifima"),
          open: true,
      },
      {
          question: __("Why is the out-of-stock form not appearing?", "notifima"),
          answer: __("There might be a theme conflict issue. To troubleshoot, switch to a default theme like Twenty Twenty-Four and check if the form appears.", "notifima"),
          open: false,
      },
      {
          question: __("Does Product Stock Manager & Notifier support product variations?", "notifima"),
          answer: __("Yes, product variations are fully supported and editable from the Inventory Manager. Product Stock Manager & Notifier handles variable products with ease and uses an expandable feature to make managing variations clear and straightforward.", "notifima"),
          open: false,
      },
      {
          question: __("Do you support Google reCaptcha for the out-of-stock form?", "notifima"),
          answer: __('Yes, <a href="https://multivendorx.com/woocommerce-product-stock-manager-notifier-pro/?utm_source=wpadmin&utm_medium=pluginsettings&utm_campaign=stockmanager" target="_blank">Product Stock Manager & Notifier Pro</a> has support for reCaptcha.', "notifima"),
          open: false,
      },
  ]);  

  const toggleFAQ = (index) => {
    setFaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <>
      <div className="dynamic-fields-wrapper">
        <div className="support-container">
          <div className="support-header-wrapper">
          <h1 className="support-heading">
              {__("Thank you for using Product Stock Manager & Notifier for WooCommerce", "notifima")}
          </h1>
          <p className="support-subheading">
              {__("We want to help you enjoy a wonderful experience with all of our products.", "notifima")}
          </p>
          </div>
          <div className="video-faq-wrapper">
            <div className="video-section">
              <iframe
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            </div>
            <div className="faq-section">
              <div className="faqs">
                {faqs.map((faq, index) => (
                  <div
                    className={"faq " + (faq.open ? "open" : "")}
                    key={index}
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="faq-question">{faq.question}</div>
                    <div className="faq-answer" dangerouslySetInnerHTML={{__html: faq.answer}}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
