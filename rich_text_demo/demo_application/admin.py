from django.contrib import admin
from django import forms
from .models import ExampleModel
from rich_text_editor.widgets import RichTextEditorWidget


class ExampleAdminForm(forms.ModelForm):
    class Meta:
        model = ExampleModel
        fields = "__all__"
        widgets = {
            'content': RichTextEditorWidget(), 
        }


class ExampleModelAdmin(admin.ModelAdmin):
    form = ExampleAdminForm


admin.site.register(ExampleModel, ExampleModelAdmin)