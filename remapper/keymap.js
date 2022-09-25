const keymap = [
  {'match': 'IntlYen', 'emit': ['Backspace']},
  {'match': 'IntlRo', 'emit': ['Backslash']},
  {'match': 'Backslash', 'emit': ['Enter']},
  {'match': 'M-KeyA', 'emit': ['Home']}, // cursor: beginning of line
  {'match': 'M-KeyE', 'emit': ['End']}, // cursor: end of line
  {'match': 'M-KeyF', 'emit': ['ArrowRight']}, // cursor: forward one character
  {'match': 'M-KeyB', 'emit': ['ArrowLeft']}, // cursor: back one character
  {'match': 'M-KeyP', 'emit': ['ArrowUp']}, // cursor: previous line
  {'match': 'M-KeyN', 'emit': ['ArrowDown']}, // cursor: next line
  {'match': 'M-KeyK', 'emit': ['S-End', 'Backspace']}, // cursor: cut to end of line
  {'match': 'M-KeyH', 'emit': ['Backspace']}, // cursor: backspace
  {'match': 'M-KeyD', 'emit': ['Delete']},
  {'match': 'M-KeyM', 'emit': ['Enter']},
//  {'match': 'M-a', 'emit': ['C-KeyA']}, // C-a replacement: for select all
//  {'match': 'M-b', 'emit': ['C-KeyB']}, // C-b replacement: for boldening text on paper
//  {'match': 'M-n', 'emit': ['C-KeyN']}, // C-n replacement: for opening a new window
//  {'match': 'M-k', 'emit': ['C-KeyK']} // C-k replacement: for Slack channel switcher
];
