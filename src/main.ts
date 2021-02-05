import { PluginBase } from './plugin-base'

// The actual plugin class
export default class MaximiseActivePanePlugin extends PluginBase {

  // perform any setup required to enable the plugin
  enable = () => {
    super.enable();
  }

  // perform any required disable steps, leave nothing behind
  disable = () => {
    super.disable();
  }

  // add in any required command pallete commands
  // addCommands = (): void => { };

  // add in any settings
  // addSettings = (): void => { };
}