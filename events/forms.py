# -*- coding: utf-8 -*-
from django import forms
from .models import Event, EventCategory

class EventForm(forms.ModelForm):
    category = forms.ModelChoiceField(
        queryset=EventCategory.objects.all(),
        widget=forms.Select(attrs={'class': 'form-control'})
    )

    class Meta:
        model = Event
        fields = ['title', 'category', 'description', 'banner']

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Així només mostrem categories d'events
        self.fields['category'].queryset = EventCategory.objects.all()