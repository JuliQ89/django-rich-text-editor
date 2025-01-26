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
                'strikeThrough',
                'superscript',
                'subscript',
                'fontSize',
                'removeFormat',
                'insertUnorderedList',
                'insertOrderedList',
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'outdent',
                'indent',
                'undo',
                'redo',
            ]
        }
    }

3. Register your Model in the admin.py with in the Admin Panel::

    from django.contrib import admin
    from django import forms
    from .models import ExampleModel
    from django_rich_text_editor.rich_text_editor.widgets import RichTextEditorWidget


    class ExampleModelForm(forms.ModelForm):
        class Meta:
            model = YourModel
            fields = "__all__"
            widgets = {
                'content': RichTextEditorWidget(), 
            }


    class ExampleModelAdmin(admin.ModelAdmin):
        form = ExampleModelForm


    admin.site.register(YourModel, ExampleModelAdmin)