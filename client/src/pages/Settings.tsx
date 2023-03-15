import { SetStateAction } from "react";
import "../styles/Settings.scss"

interface SettingsPageProps {
    darkMode: boolean;
    setDarkMode(darkMode: boolean): void
}

const Settings: React.FC<SettingsPageProps> = (props: SettingsPageProps) => {
    return (
        <>
            <div className="app-main-container">
                <div className="settings-menu">
                <h2>Settings</h2>
                    <div className="settings-section">
                        <h4>Theme</h4>
                        <hr />
                        <label htmlFor="">
                            Dark Mode
                            <input type="checkbox" name="Dark Mode" id="dark-mode" />
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;