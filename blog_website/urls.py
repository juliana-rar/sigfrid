from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),
    path('', include('user_profile.urls')),
    path('', include("events.urls")),

    path('ckeditor/', include('ckeditor_uploader.urls')), 
]
# Esto sirve en produccion para que django sirva archivo estatáticos
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)