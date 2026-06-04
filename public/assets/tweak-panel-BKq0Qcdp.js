/**
 * Tweak Panel Module
 * Provides runtime tweaking and debugging capabilities
 */

export function mountTweakPanel(tweakConfig) {
  // Create tweak panel container
  const panel = document.createElement('div');
  panel.id = 'tweak-panel';
  panel.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 320px;
    max-height: 400px;
    background: rgba(0, 0, 0, 0.9);
    color: #fff;
    border: 2px solid #00ff00;
    border-radius: 8px;
    padding: 16px;
    font-family: monospace;
    font-size: 12px;
    z-index: 10000;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
  `;

  // Panel header
  const header = document.createElement('div');
  header.style.cssText = 'margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #00ff00; color: #00ff00; font-weight: bold;';
  header.textContent = '⚙️ TWEAK PANEL';
  panel.appendChild(header);

  // Display tweak configuration
  const content = document.createElement('div');
  if (tweakConfig) {
    const entries = Object.entries(tweakConfig);
    if (entries.length > 0) {
      entries.forEach(([key, value]) => {
        const item = document.createElement('div');
        item.style.cssText = 'margin-bottom: 8px; word-break: break-all;';
        item.innerHTML = `<span style="color: #00ff00;">${key}:</span> <span style="color: #ffff00;">${JSON.stringify(value)}</span>`;
        content.appendChild(item);
      });
    } else {
      content.textContent = 'No tweaks configured';
    }
  } else {
    content.textContent = 'Ready for tweaks';
  }
  panel.appendChild(content);

  // Add close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '✕ Close';
  closeBtn.style.cssText = `
    width: 100%;
    margin-top: 12px;
    padding: 8px;
    background: #00ff00;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    font-family: monospace;
  `;
  closeBtn.addEventListener('click', () => panel.remove());
  closeBtn.addEventListener('mouseenter', () => closeBtn.style.background = '#00cc00');
  closeBtn.addEventListener('mouseleave', () => closeBtn.style.background = '#00ff00');
  panel.appendChild(closeBtn);

  // Append to document
  document.body.appendChild(panel);

  return {
    panel,
    update: (newConfig) => {
      content.innerHTML = '';
      Object.entries(newConfig).forEach(([key, value]) => {
        const item = document.createElement('div');
        item.style.cssText = 'margin-bottom: 8px; word-break: break-all;';
        item.innerHTML = `<span style="color: #00ff00;">${key}:</span> <span style="color: #ffff00;">${JSON.stringify(value)}</span>`;
        content.appendChild(item);
      });
    },
    remove: () => panel.remove(),
  };
}
