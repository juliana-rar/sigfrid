from django.db import models
from django.db.models.fields.files import ImageField
from django.forms import CharField, URLField


class Project(models.Model):
    title = models.CharField(max_length=100, default='')
    description = models.CharField(max_length=250)
    image = ImageField(upload_to="portfolio/images")
    url = models.URLField(null=True)
