import './AdminFooter.scss';
import { __ } from "@wordpress/i18n";

const AdminFooter = () => {

    const supportLink = [
        {
          title: __("Get in touch with Support", "notifima"),
          icon: "mail",
          description: __("Reach out to the support team for assistance or guidance.", "notifima"),
          link: "https://notifima.com/contact-us/",
        },
        {
            title: __("Explore Documentation", "notifima"),
            icon: "submission-message",
            description: __("Understand the plugin and its settings.", "notifima"),
            link: "https://notifima.com/docs/",
        },
        {
            title: __("Contribute Here", "notifima"),
            icon: "support",
            description: __("Participate in product enhancement.", "notifima"),
            link: "https://github.com/multivendorx/woocommerce-product-stock-alert/issues",
        }
      ];

    return (
        <>
            <div className="support-card">
            {supportLink.map((item, index) => {
                return (
                <>
                    <a href={item.link} target="_blank" className="card-item">
                    <i className={`admin-font adminLib-${item.icon}`}></i>
                    <a href={item.link} target="_blank">
                        {item.title}
                    </a>
                    <p>{item.description}</p>
                    </a>
                </>
                );
            })}
            </div>
        </>
    )
}
export default AdminFooter;
