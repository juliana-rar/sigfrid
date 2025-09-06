# -*- coding: utf-8 -*-
from django.urls import path
from . import views
app_name = 'events'
urlpatterns = [
    path("add/", views.add_event, name="add_event"),
    path("", views.event_list, name="event_list"),
    path('my-events/', views.my_events, name='my_events'),
    path('update/<slug:slug>/', views.update_event, name='update_event'),
    path("categories/", views.manage_event_categories, name="manage_event_categories"),
    path("categories/delete/<int:category_id>/", views.delete_event_category, name="delete_event_category"),
    path("categories/edit/<int:category_id>/", views.edit_event_category, name="edit_event_category"),
]
