from django.db import models
from rich_text_editor.fields import RichTextField

# Create your models here.
class ExampleModel(models.Model):
    content = RichTextField()