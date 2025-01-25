from django.db import models
from django_rich_text_editor.rich_text_editor.fields import RichTextField

# Create your models here.
class ExampleModel(models.Model):
    content = RichTextField()