'use client';

import { useEffect } from 'react';

export default function SecurityGuard() {
  useEffect(() => {
    // 1. Block Context Menu (Right Click)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // 2. Block Dragging (Images, Text, Elements)
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      return false;
    };

    // 3. Block Copy & Cut outside editable form fields
    const handleCopyCut = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      if (!isInput) {
        e.preventDefault();
        return false;
      }
    };

    // 4. Block Developer Tools & Extraction Keyboard Shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      const target = e.target as HTMLElement | null;
      const isInput =
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable);

      // F12 (DevTools)
      if (e.key === 'F12') {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + Shift + I/J/C (Inspect / Console / DevTools)
      if (isCtrlOrCmd && e.shiftKey && ['i', 'j', 'c'].includes(key)) {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + U (View Source)
      if (isCtrlOrCmd && key === 'u') {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + S (Save Page)
      if (isCtrlOrCmd && key === 's') {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + P (Print / Text Rip)
      if (isCtrlOrCmd && key === 'p') {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + A (Select All outside of inputs)
      if (isCtrlOrCmd && key === 'a' && !isInput) {
        e.preventDefault();
        return false;
      }

      // Ctrl/Cmd + C / X (Copy / Cut outside of inputs)
      if (isCtrlOrCmd && ['c', 'x'].includes(key) && !isInput) {
        e.preventDefault();
        return false;
      }
    };

    // Attach listeners
    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });
    document.addEventListener('copy', handleCopyCut, { capture: true });
    document.addEventListener('cut', handleCopyCut, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
      document.removeEventListener('copy', handleCopyCut, { capture: true });
      document.removeEventListener('cut', handleCopyCut, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
    };
  }, []);

  return null;
}

