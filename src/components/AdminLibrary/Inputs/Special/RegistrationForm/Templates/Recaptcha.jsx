import { __ } from "@wordpress/i18n";

const Recaptach = (props) => {
    const { formField, onChange } = props;

    return (
        <>
            <div className={`main-input-wrapper ${!formField.sitekey ? 'recaptcha' : ''}`}>
                <p>{__("reCAPTCHA has been successfully added to the form.", "notifima")}</p>
            </div>
        </>
    )
}

export default Recaptach;