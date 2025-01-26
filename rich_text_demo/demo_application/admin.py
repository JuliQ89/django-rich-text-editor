from django.contrib import admin
from django import forms
from .models import ExampleModel
from django_rich_text_editor.rich_text_editor.widgets import RichTextEditorWidget


class ExampleModelForm(forms.ModelForm):
    class Meta:
        model = ExampleModel
        fields = "__all__"
        widgets = {
            'content': RichTextEditorWidget(), 
        }

class ExampleModelAdmin(admin.ModelAdmin):
    form = ExampleModelForm


admin.site.register(ExampleModel, ExampleModelAdmin)