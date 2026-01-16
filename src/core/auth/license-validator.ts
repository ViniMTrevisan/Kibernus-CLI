export interface ValidationResult {
    valid: boolean;
    tier: 'FREE' | 'PRO';
    expiration?: Date;
    message?: string;
}

export class LicenseValidator {
    /**
     * Validates a license key.
     * V1: Simple validation - any key starting with "KIB-PRO-" is considered valid.
     * V2: Will connect to remote API for real validation.
     */
    async validate(key: string): Promise<ValidationResult> {
        // Normalize the key
        const normalizedKey = key?.trim();

        if (!normalizedKey) {
            return {
                valid: false,
                tier: 'FREE',
                message: 'License key cannot be empty',
            };
        }

        // V1: Mock validation - accept any key starting with KYB-PRO-
        if (normalizedKey.startsWith('KYB-PRO-')) {
            return {
                valid: true,
                tier: 'PRO',
                message: 'Valid Pro license',
                // Set expiration to 1 year from now for testing
                expiration: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
            };
        }

        return {
            valid: false,
            tier: 'FREE',
            message: 'Invalid license key format',
        };
    }

    /**
     * Checks if a license is still valid (not expired).
     */
    isLicenseActive(expiration?: string): boolean {
        if (!expiration) return false;

        const expirationDate = new Date(expiration);
        return expirationDate > new Date();
    }
}
