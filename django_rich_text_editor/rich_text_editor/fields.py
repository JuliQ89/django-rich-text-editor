from django.db import models


class RichTextField(models.TextField):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def formfield(self, **kwargs):
        from django import forms
        from .widgets import RichTextEditorWidget

        defaults = {'widget': RichTextEditorWidget}
        defaults.update(kwargs)
        return super().formfield(**defaults)