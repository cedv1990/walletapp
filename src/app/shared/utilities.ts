import { OperatingSystem } from './operating-system.enum';

export class Utilities {
    static isMobile(): boolean {
        return this.mobileOperatingSystem() !== OperatingSystem.Desktop;
    }

    static mobileOperatingSystem(): OperatingSystem {
        const userAgent = this.getUserAgent();
        if (/windows phone/i.test(userAgent)) {
            return OperatingSystem.WindowsPhone;
        }
        if (/android/i.test(userAgent)) {
            return OperatingSystem.Android;
        }
        if (/iPad|iPhone|iPod/i.test(userAgent) && !(<any>window).MSStream) {
            return OperatingSystem.iOS;
        }
        return OperatingSystem.Desktop;
    }

    static getUserAgent(): string {
        return navigator.userAgent || navigator.vendor || (<any>window).opera;
    }
}
