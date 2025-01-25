from django.forms.widgets import Widget
from django.template import loader
from django.utils.safestring import mark_safe
from django.conf import settings
from .configs import DEFAULT_RICH_TEXT_EDITOR_CONFIGS

class RichTextEditorWidget(Widget):
    template_name = 'rich_text_editor/widget.html'

    class Media:
        css = {
            'all': ('css/editor.css','https://cdn.jsdelivr.net/npm/remixicon@latest/fonts/remixicon.css')
        }
        js = ('js/editor.js',)

    def get_context(self, name, value, attrs=None):
        configs = getattr(settings, 'RICH_TEXT_EDITOR_CONFIGS', None)

        context = {'widget': {
            'name': name, 
            'value': value
        }}

        if configs:
            context['configs'] = configs
        else:
            context['configs'] = DEFAULT_RICH_TEXT_EDITOR_CONFIGS

        return context 
    
    def render(self, name, value, attrs = ..., renderer = ...):
        context = self.get_context(name, value, attrs)
        template = loader.get_template(self.template_name).render(context)
        return mark_safe(template) 
