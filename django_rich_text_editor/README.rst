========================
Django Rich Text Editor
========================

Quick start
===========

1. Add "rich_text_editor" to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = [
        ...
        'rich_text_editor',
    ]

2. Make extra Configs in your settings (optional)::

    RICH_TEXT_EDITOR_CONFIGS = {
        'toolbar': {
            'items': [
                'bold',
                'italic',
                'underline',
                'strike',
                'superscript',
                'subscript',
                'unordered',
                'ordered',
                'alignLeft',
                'alignCenter',
                'alignRight',
            ]
        }
    }

