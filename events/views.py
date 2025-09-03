# -*- coding: utf-8 -*-
from django.shortcuts import render, get_object_or_404, redirect
from .models import Event, EventCategory
from .forms import EventForm
from events.models import Event
from django.contrib.auth.decorators import login_required
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.contrib import messages

@login_required(login_url="login")
def add_event(request):
    form = EventForm()
    categories = EventCategory.objects.all()

    if request.method == "POST":
        form = EventForm(request.POST, request.FILES)
        if form.is_valid():
            event = form.save(commit=False)
            event.user = request.user  # assigna lusuari que crea l'event
            # slug unic com en blog
            if not event.slug:
                from event.slugs import generate_unique_slug
                event.slug = generate_unique_slug(Event, event.title)
            event.save()
            messages.success(request, "Event creat correctament")
            return redirect("event_list")  # pots canviarho a la pagina que vulguis
        else:
            print(form.errors)

    context = {
        "form": form,
        "categories": EventCategory.objects.all()
    }
    return render(request, "add_event.html", context)

@login_required(login_url="login")
def update_event(request, slug):
    event = get_object_or_404(Event, slug=slug)
    if request.user != event.user:
        return redirect("event_list")  # nomes el propietari pot editar

    form = EventForm(instance=event)
    categories = EventCategory.objects.all()

    if request.method == "POST":
        form = EventForm(request.POST, request.FILES, instance=event)
        if form.is_valid():
            event = form.save(commit=False)
            event.user = request.user
            if not event.slug:
                from blog.slugs import generate_unique_slug
                event.slug = generate_unique_slug(Event, event.title)
            event.save()
            messages.success(request, "Event actualitzat correctament")
            return redirect("event_list")
        else:
            print(form.errors)

    context = {
        "form": form,
        "event": event,
        "categories": categories
    }
    return render(request, "update_event.html", context)
def event_list(request):
    events = Event.objects.order_by("-start_date")  # o createddate
    categories = EventCategory.objects.all()
    context = {
        "events": events,
        "categories": categories
    }
    return render(request, "event_list.html", context)


@login_required(login_url='login')
def my_events(request):
    # Obtenim noms els events del usuari actual
    queryset = request.user.user_events.all()  # assegurat que related_nameuser_events al model Event
    paginator = Paginator(queryset, 6)
    page = request.GET.get('page', 1)
    delete = request.GET.get('delete', None)

    if delete:
        event = get_object_or_404(Event, pk=delete)
        if request.user.pk != event.user.pk:
            return redirect('home')  # No pot eliminar events daltres usuaris
        
        event.delete()
        messages.success(request, "Your event has been deleted!")
        return redirect('my_events')

    try:
        events = paginator.page(page)
    except EmptyPage:
        events = paginator.page(1)
    except PageNotAnInteger:
        events = paginator.page(1)
        return redirect('my_events')

    context = {
        "events": events,
        "paginator": paginator
    }

    return render(request, 'my_events.html', context)

def manage_event_categories(request):
    if request.method == "POST":
        title = request.POST.get("title")
        if title:
            EventCategory.objects.create(title=title, slug=slugify(title))
            return redirect("manage_event_categories")

    categories = EventCategory.objects.all().order_by("-created_date")
    return render(request, "manage_event_categories.html", {"categories": categories})

def delete_event_category(request, category_id):
    category = get_object_or_404(EventCategory, id=category_id)
    category.delete()
    return redirect("manage_event_categories")

def edit_event_category(request, category_id):
    category = get_object_or_404(EventCategory, id=category_id)
    if request.method == "POST":
        new_title = request.POST.get("title")
        if new_title:
            category.title = new_title
            category.slug = slugify(new_title)
            category.save()
        return redirect("manage_event_categories")
    return render(request, "edit_event_category.html", {"category": category}) 