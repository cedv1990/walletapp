import { Utilities } from './utilities';
import { OperatingSystem } from './operating-system.enum';

describe('utilities', () => {
    it('should "mobileOperatingSystem" return "WindowsPhone"', () => {
        spyOn(Utilities, 'getUserAgent').and.returnValue('windows phone');
        const OS: OperatingSystem = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.WindowsPhone);
    });

    it('should "mobileOperatingSystem" return "Android"', () => {
        spyOn(Utilities, 'getUserAgent').and.returnValue('android');
        const OS: OperatingSystem = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.Android);
    });

    it('should "mobileOperatingSystem" return "iOS"', () => {
        const getUserAgentSpy: jasmine.Spy = spyOn(Utilities, 'getUserAgent');

        getUserAgentSpy.and.returnValue('iPad');
        let OS: OperatingSystem = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.iOS);

        getUserAgentSpy.and.returnValue('iPhone');
        OS = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.iOS);

        getUserAgentSpy.and.returnValue('iPod');
        OS = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.iOS);

        (<any>window).MSStream = true;
        OS = Utilities.mobileOperatingSystem();
        expect(OS).not.toBe(OperatingSystem.iOS);
    });

    it('should "mobileOperatingSystem" return "Desktop"', () => {
        spyOn(Utilities, 'getUserAgent').and.returnValue('IE');
        const OS: OperatingSystem = Utilities.mobileOperatingSystem();
        expect(OS).toBe(OperatingSystem.Desktop);
    });

    it('should "getUserAgent" return "navigator.userAgent"', () => {
        spyOnProperty(navigator, 'userAgent', 'get').and.returnValue('userAgent');
        const userAgent: string = Utilities.getUserAgent();
        expect(userAgent).toBe('userAgent');
    });

    it('should "getUserAgent" return "navigator.userAgent"', () => {
        spyOnProperty(navigator, 'userAgent', 'get').and.returnValue(undefined);
        spyOnProperty(navigator, 'vendor', 'get').and.returnValue('vendor');
        const userAgent: string = Utilities.getUserAgent();
        expect(userAgent).toBe('vendor');
    });

    it('should "getUserAgent" return "navigator.userAgent"', () => {
        spyOnProperty(navigator, 'userAgent', 'get').and.returnValue(undefined);
        spyOnProperty(navigator, 'vendor', 'get').and.returnValue(undefined);
        (<any>window).opera = 'opera';
        const userAgent: string = Utilities.getUserAgent();
        expect(userAgent).toBe('opera');
    });

    it('should "isMobile" return "false"', () => {
        spyOn(Utilities, 'mobileOperatingSystem').and.returnValue(OperatingSystem.Desktop);
        const isMobile: boolean = Utilities.isMobile();
        expect(isMobile).toBeFalsy();
    });
});
