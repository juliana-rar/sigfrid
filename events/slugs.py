# -*- coding: utf-8 -*-

from django.utils.text import slugify

def generate_unique_slug(model, value):
    slug = slugify(value)
    unique_slug = slug
    num = 1

    while model.objects.filter(slug=unique_slug).exists():
        unique_slug = f"{slug}-{num}"
        num += 1

    return unique_slug
