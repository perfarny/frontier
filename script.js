// Frontier Admin Control JavaScript functionality
class FrontierAdminControl {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadSettings();
    }

    bindEvents() {
        // Save button click
        document.getElementById('saveBtn').addEventListener('click', () => {
            this.saveSettings();
        });

        // Cancel button click
        document.getElementById('cancelBtn').addEventListener('click', () => {
            this.cancelChanges();
        });

        // Radio button changes
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', () => {
                this.onSettingChange();
            });
        });
    }

    loadSettings() {
        // Load saved settings from localStorage or set defaults
        const savedSettings = this.getSavedSettings();
        
        // Set Web Apps selection
        const webAppsRadio = document.querySelector(`input[name="webApps"][value="${savedSettings.webApps}"]`);
        if (webAppsRadio) {
            webAppsRadio.checked = true;
        }

        // Set Office win32 selection
        const officeWin32Radio = document.querySelector(`input[name="officeWin32"][value="${savedSettings.officeWin32}"]`);
        if (officeWin32Radio) {
            officeWin32Radio.checked = true;
        }
    }

    getSavedSettings() {
        // Get settings from localStorage or return defaults
        const defaults = {
            webApps: 'noAccess',
            officeWin32: 'noAccess'
        };

        try {
            const saved = localStorage.getItem('frontierAdminSettings');
            return saved ? { ...defaults, ...JSON.parse(saved) } : defaults;
        } catch (error) {
            console.warn('Failed to load saved settings:', error);
            return defaults;
        }
    }

    getCurrentSettings() {
        const webAppsRadio = document.querySelector('input[name="webApps"]:checked');
        const officeWin32Radio = document.querySelector('input[name="officeWin32"]:checked');

        return {
            webApps: webAppsRadio ? webAppsRadio.value : 'noAccess',
            officeWin32: officeWin32Radio ? officeWin32Radio.value : 'noAccess'
        };
    }

    saveSettings() {
        const settings = this.getCurrentSettings();
        
        try {
            // Save to localStorage
            localStorage.setItem('frontierAdminSettings', JSON.stringify(settings));
            
            // Show success message
            this.showStatusMessage('Settings saved successfully!', 'success');
            
            // Log the configuration for demonstration
            console.log('Frontier Admin Control Settings Saved:', settings);
            
            // In a real implementation, this would make an API call to save the settings
            this.simulateApiCall(settings);
            
        } catch (error) {
            console.error('Failed to save settings:', error);
            this.showStatusMessage('Failed to save settings. Please try again.', 'error');
        }
    }

    cancelChanges() {
        // Reload the saved settings
        this.loadSettings();
        this.showStatusMessage('Changes cancelled. Settings restored.', 'success');
    }

    onSettingChange() {
        // This could be used to show unsaved changes indicator
        console.log('Settings changed:', this.getCurrentSettings());
    }

    showStatusMessage(message, type = 'success') {
        const statusElement = document.getElementById('statusMessage');
        statusElement.textContent = message;
        statusElement.className = `status-message ${type}`;
        statusElement.style.display = 'block';

        // Hide message after 3 seconds
        setTimeout(() => {
            statusElement.style.display = 'none';
        }, 3000);
    }

    simulateApiCall(settings) {
        // Simulate API call delay and response
        setTimeout(() => {
            console.log('API Response: Settings successfully applied to tenant');
            console.log('Web Apps access level:', this.getAccessLevelDescription(settings.webApps));
            console.log('Office win32 access level:', this.getAccessLevelDescription(settings.officeWin32));
        }, 500);
    }

    getAccessLevelDescription(level) {
        const descriptions = {
            'noAccess': 'Frontier features are disabled',
            'allUsers': 'Frontier features enabled for all users',
            'specificGroups': 'Frontier features enabled for specific user groups'
        };
        return descriptions[level] || 'Unknown access level';
    }

    // Public method to get current configuration
    getConfiguration() {
        return this.getCurrentSettings();
    }

    // Public method to validate settings
    validateSettings() {
        const settings = this.getCurrentSettings();
        const isValid = settings.webApps && settings.officeWin32;
        
        if (!isValid) {
            this.showStatusMessage('Please select an option for both Web Apps and Office win32.', 'error');
        }
        
        return isValid;
    }
}

// Initialize the control when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.frontierControl = new FrontierAdminControl();
    
    // Add some demo functionality for testing
    console.log('Frontier Admin Control initialized');
    console.log('Available methods: frontierControl.getConfiguration(), frontierControl.validateSettings()');
});