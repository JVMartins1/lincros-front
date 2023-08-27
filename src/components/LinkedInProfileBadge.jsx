import React, { useEffect } from 'react';

function LinkedInProfileBadge() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://platform.linkedin.com/badges/js/profile.js";
        script.async = true;
        script.defer = true;
        script.type = "text/javascript";
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div className="d-flex align-items-center justify-content-center fade-in" style={{ height: '80vh' }}>
            <div className="d-flex flex-column align-items-center" style={{ maxWidth: '50%' }}>
                <div className="badge-base LI-profile-badge"
                    data-locale="pt_BR"
                    data-size="medium"
                    data-theme="light"
                    data-type="VERTICAL"
                    data-vanity="jvmartins-dev"
                    data-version="v1">
                </div>
            </div>
        </div>
    );
};

export default LinkedInProfileBadge;
