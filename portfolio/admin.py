from django.contrib import admin
from portfolio.models import Project

admin.site.register(Project)

# class ProjectAdmin(admin.ModelAdmin):
#     list_display = ('title', 'description', 'url')  # Add 'url' here if you want to display it in the list

