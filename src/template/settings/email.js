import { __ } from '@wordpress/i18n';

export default {
    id: "email",
    priority: 4,
    name: __("Email Restriction Policies", "woocommerce-stock-manager"),
    desc: __("Restrict email registrations.", "woocommerce-stock-manager"),
    icon: "adminLib-mail",
    proDependent: true,
    submitUrl: "save-stockmanager",
    modal: [
        {
            key: "ban_email_domains",
            type: "textarea",
            class: "woo-setting-wpeditor-class",
            desc: __("Specify email domains that are restricted from subscribing. You can add multiple commma seperated emails.", "woocommerce-stock-manager"),
            label: __("Block email domains", "woocommerce-stock-manager"),
            proSetting: true,
        },
        {
            key: 'separator_content',
            type: 'section',
            label: "",
        },
        {
            key: "ban_email_domain_text",
            type: "textarea",
            label: __("Blocked domain alert message", "woocommerce-stock-manager"),
            desc: __(" Create an alert message for users attempting to subscribe from blocked domains.", "woocommerce-stock-manager"),
            proSetting: true,
        },
        {
            key: 'separator_content',
            type: 'section',
            label: "",
        },
        {
            key: "ban_email_addresses",
            type: "textarea",
            class: "woo-setting-wpeditor-class",
            desc: __("Specify email addresses that are restricted from subscribing. You can add multiple commma seperated emails.", "woocommerce-stock-manager"),
            label: __("Blocked email addresses", "woocommerce-stock-manager"),
            proSetting: true,
        },
        {
            key: 'separator_content',
            type: 'section',
            label: "",
        },
        {
            key: "ban_email_address_text",
            type: "textarea",
            label: __("Blocked email alert message", "woocommerce-stock-manager"),
            desc: __("Create an alert message for users attempting to subscribe from blocked Email ID.", "woocommerce-stock-manager"),
            proSetting: true,
        },
        {
            key:  'note_blocktext',
            type:  'blocktext',
            label: 'no_label',
            blocktext: "Disclaimer – Loco Translator Compatibility: This plugin allows you to customize certain frontend text settings and descriptions. Default texts are Loco Translator-ready, but any changes made in the corresponding custom text box will no longer be available for translation via Loco Translator. Hence, please enter the customized text in your desired language only.",
        }
    ]
};
